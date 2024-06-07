namespace Commons {
  export const Configs = {
    MAX_TAG_NUM: 3,
    MAX_APPEARANCE_NUM: 6,
  };
  export const JSX = {
    ALT_AFTER_TEXT: "の画像",
  };
}
namespace Manages {
  // 和名
  export const Wamei = {
    // 公開/非公開
    RELEASE_STATUS_TEXT: "公開",
    NO_RELEASE_STATUS_TEXT: "非公開",
  };

  export const Modals = {
    Edit: {
      TITLES: "titles_edit",
      IMAGE: "image_edit",
      AUTHOR: "author_edit",
      RELEASE: "release_edit",
      TAG: "tag_edit",
      APPEARANCE: "appearance_edit",
      TAG_SELECTOR: "tag_selector",
      APPEARANCE_SELECTOR: "appearance_selector",
    },
    Show: {},
  };
}

export { Manages, Commons };
