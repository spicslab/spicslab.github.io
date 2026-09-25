/*
  splits each publication list into pages, with a per-page size selector and
  prev/next/number navigation, and opens folded sections when needed.

  a section is any element with the data-paginate attribute (see
  _includes/pub-list.html). its items are the direct children of the
  .pub-items element inside it. items hidden by search.js are skipped.
*/
{
  // section element
  const sectionSelector = "[data-paginate]";
  // element whose direct children are the items to page through
  const itemsSelector = ".pub-items";
  // elements that search.js shows/hides (keep in sync with search.js)
  const searchSelector = ".card, .citation, .post-excerpt, .citation-compact";
  // page size choices
  const sizes = [5, 10, 20];
  // max page buttons before collapsing with ellipses
  const maxPageButtons = 7;

  // per-section state
  const states = new WeakMap();
  const getState = (section) => {
    if (!states.has(section)) {
      const size = Number(section.dataset.pageSize);
      states.set(section, {
        page: 1,
        size: sizes.includes(size) ? size : sizes[0],
        count: -1,
      });
    }
    return states.get(section);
  };

  // create element
  const create = (tag, className = "", text = "") => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  // create button
  const button = (text, label, onClick) => {
    const element = create("button", "pager-button", text);
    element.type = "button";
    element.setAttribute("aria-label", label);
    element.addEventListener("click", onClick);
    return element;
  };

  // whether item is currently hidden by search
  const hiddenBySearch = (item) => {
    const target = item.matches(searchSelector)
      ? item
      : item.querySelector(searchSelector);
    return !!target && target.style.display === "none";
  };

  // all items in section, and those not hidden by search
  const getItems = (section) => {
    const list = section.querySelector(itemsSelector);
    const all = list ? [...list.children] : [];
    const visible = all.filter((item) => !hiddenBySearch(item));
    return { all, visible };
  };

  // current search query
  const getQuery = () =>
    (document.querySelector(".search-input")?.value || "").trim();

  // scroll section top into view if it has scrolled past
  const scrollTo = (section) => {
    const offset = document.querySelector("header")?.clientHeight || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
  };

  // page numbers to show, with "…" for gaps
  const pageList = (current, total) => {
    if (total <= maxPageButtons)
      return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [...new Set([1, current - 1, current, current + 1, total])]
      .filter((p) => p >= 1 && p <= total)
      .sort((a, b) => a - b);
    const result = [];
    pages.forEach((p, i) => {
      if (i > 0 && p - pages[i - 1] > 1) result.push("…");
      result.push(p);
    });
    return result;
  };

  // per-page size selector
  const sizeControl = (section, state) => {
    const wrapper = create("div", "pager-size");
    wrapper.append(create("span", "pager-label", "Per page"));
    for (const size of sizes) {
      const element = button(String(size), `show ${size} per page`, () => {
        state.size = size;
        state.page = 1;
        render(section);
      });
      element.setAttribute("aria-pressed", String(size === state.size));
      wrapper.append(element);
    }
    return wrapper;
  };

  // prev / page numbers / next
  const navControl = (section, state, pages, scroll) => {
    const nav = create("nav", "pager-nav");
    nav.setAttribute("aria-label", "pages");

    const go = (page) => {
      state.page = page;
      render(section);
      if (scroll) scrollTo(section);
    };

    const arrow = (icon, label, page, disabled) => {
      const element = button("", label, () => go(page));
      element.innerHTML = `<i class="icon fa-solid ${icon}"></i>`;
      element.disabled = disabled;
      return element;
    };

    nav.append(
      arrow("fa-angle-left", "previous page", state.page - 1, state.page <= 1)
    );
    for (const p of pageList(state.page, pages)) {
      if (p === "…") {
        nav.append(create("span", "pager-ellipsis", "…"));
        continue;
      }
      const element = button(String(p), `page ${p}`, () => go(p));
      if (p === state.page) element.setAttribute("aria-current", "page");
      nav.append(element);
    }
    nav.append(
      arrow("fa-angle-right", "next page", state.page + 1, state.page >= pages)
    );

    return nav;
  };

  // "showing x–y of n" text
  const infoText = (all, visible, start, end) => {
    if (!all) return "No publications listed yet";
    if (!visible) return "No matches";
    return `Showing ${start + 1}–${end} of ${visible}`;
  };

  // show current page of items and rebuild controls
  const render = (section) => {
    const state = getState(section);
    const { all, visible } = getItems(section);

    // go back to first page if the set of visible items changed
    if (visible.length !== state.count) {
      state.page = 1;
      state.count = visible.length;
    }

    const pages = Math.max(1, Math.ceil(visible.length / state.size));
    state.page = Math.min(Math.max(state.page, 1), pages);
    const start = (state.page - 1) * state.size;
    const end = Math.min(start + state.size, visible.length);
    const shown = new Set(visible.slice(start, end));

    // show/hide items
    for (const item of all) item.hidden = !shown.has(item);

    // count next to heading
    const count = section.querySelector(".pub-count");
    if (count)
      count.textContent =
        getQuery() && visible.length !== all.length
          ? `(${visible.length} of ${all.length})`
          : `(${all.length})`;

    // controls
    for (const pager of section.querySelectorAll(".pager")) {
      const top = pager.classList.contains("pager-top");
      pager.replaceChildren();
      if (top && all.length > sizes[0])
        pager.append(sizeControl(section, state));
      if (pages > 1) pager.append(navControl(section, state, pages, !top));
      pager.append(
        create(
          "div",
          "pager-info",
          infoText(all.length, visible.length, start, end)
        )
      );
      pager.hidden = !top && pages <= 1;
    }
  };

  // render every section
  const renderAll = () =>
    document.querySelectorAll(sectionSelector).forEach(render);

  // while searching, open sections that have matches
  const openMatching = () => {
    if (!getQuery()) return;
    for (const section of document.querySelectorAll(sectionSelector))
      if (getItems(section).visible.length) section.open = true;
  };

  // open section targeted by url hash
  const openFromHash = () => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const section = document.getElementById(id)?.closest(sectionSelector);
    if (section) section.open = true;
  };

  // after page loads
  window.addEventListener("load", () => {
    renderAll();
    openFromHash();
  });
  // when hash nav happens
  window.addEventListener("hashchange", openFromHash);
  // after search runs
  window.addEventListener("searchrun", () => {
    renderAll();
    openMatching();
  });
}
