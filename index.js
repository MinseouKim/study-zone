const membersListEl = document.querySelector("#members-list");

const fetchSiteMap = async () => {
  const res = await fetch("sitemap.json");
  const json = await res.json();
  return json;
};

const createMembersList = (siteMap) => {
  const membersList = siteMap
    .filter((url) => url.startsWith("members/"))
    .map((url) => {
      const splittedUrl = url.split("/");
      const name = splittedUrl[splittedUrl.length - 1];
      return { name, href: url };
    });

  return membersList;
};

const init = async () => {
  const siteMap = await fetchSiteMap();
  const membersList = createMembersList(siteMap);
  membersList.forEach((member) => {
    const memberEl = document.createElement("a");
    memberEl.textContent = member.name;
    memberEl.href = member.href;
    membersListEl.appendChild(memberEl);
  });
};

init();
