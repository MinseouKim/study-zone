const breadcrumb = document.querySelector("#breadcrumb");

const getCurrentPageTitle = () => {
  const titleTag = document.querySelector("h1");
  return titleTag.textContent;
};

const createSeparator = () => {
  const separator = document.createElement("span");
  separator.textContent = "/";
  separator.style.margin = "0 8px";
  return separator;
};

const createBreadcrumb = (title) => {
  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.href = "../";
  breadcrumb.appendChild(homeLink);

  const separator = createSeparator();
  breadcrumb.appendChild(separator);

  const currentPageLink = document.createElement("a");
  currentPageLink.textContent = title;
  currentPageLink.href = location.pathname;
  breadcrumb.appendChild(currentPageLink);
};

function init() {
  const title = getCurrentPageTitle();
  createBreadcrumb(title);
}

init();
