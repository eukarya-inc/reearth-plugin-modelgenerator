reearth.ui.show(
  `
<style>
  @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
          U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
          U+2215, U+FEFF, U+FFFD;
  }

  html,
  body {
    margin: 0;
    height: auto;
    overflow:hidden;
    max-width: 312px
  }

  #wrapper {
    display: block;
    gap: 20px;
    background: #171618;
    overflow:hidden;
    border-radius: 4px;
    max-width: 312px
  }

  .height-46 {
    height:46px;
		border-radius: 4px;
  }

  .group-div:first-child .group-title {
    margin-top: 0px;
  }

  div#form-wrapper {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .section .extendedh, .extendedh { width: 46px; cursor: pointer;}
  .section .extendedv, .extendedv { height: 46px; }
  #wrapper { box-sizing: border-box; }
  .extendedh body, .extendedh #wrapper { width: 100%; border-radius: 4px;}
  .extendedv body, .extendedv #wrapper { height: 100%; }

  p,
  h3,
  span,
  label {
      color: #bfbfbf;
  }

  #title {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    height: 30px;
    background: #171618;
    border-radius: 4px 4px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    padding-bottom: 8px;
    padding-top: 8px;
  }

  span#logo {
    margin-right: 15px;
    margin-top: 6px;
    margin-left: 14px;
  }

  span#closed-logo svg {
    margin-top: 8px;
    margin-left: 8px;
  }
  

  .group-title {
      width: 100%;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      margin-bottom: 12px;
      margin-top: 16px;
  }

	.group-title p {
    margin: 0px 8px;
  }

  p.title-p {
    margin-top: 13px;
  }
  
  .group-title p {
      margin: 0px 8px;
  }

  .input-title {
      display: block;
      overflow: hidden;
      font-size: 12px;
      line-height: 16px;
      padding: 9px 0px 12px 0px;
      width: 105px;
      margin: 0px;
      float: left;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
  }

    input[type="number"],
    select {
        width: calc(100% - 121px);
        background: #181618 !important;
        border: 1px solid #4a4a4a;
        height: 30px;
        color: #c7c5c5;
        font-size: 12px;
        padding-left: 7px;
        float: right;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        -webkit-appearance: none;
        position: relative;
    }

    select option {
        background: #ff0000 !important;

    }

    /* Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    *:focus {
        outline: none;
    }

    select {
        width: calc(100% - 110px);
        -webkit-appearance: none;
    }

    .guide {
        display: block;
        width: 100%;
        font-size: 12px;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 400;
        margin-bottom: 10px;
    }


		#clean-all-fields {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #3b3cd0;
    border: solid 1px #3b3cd0;
    background: transparent;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 4px;
    padding: 5px;
    margin-right: 7px;
  }

  #clean-all-fields,
  #generate-model,
  #download {
    cursor: pointer;
  }

  #clean-all-fields,
  #generate-model {
    width: calc(50% - 7px);
    height: 30px;
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
  }

    #generate-model,
    #download {
        font-family: "Roboto" !important;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        background: #3b3cd0;
        border: solid 1px #3b3cd0;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
        border-radius: 4px;
        padding: 5px;
        height: 30px;
    }

    #download {
        width: 100%;
    }

    button {
        display: inline-block;
    }

    /* #general, #export {
    margin-top: 20px;
} */
    .separator {
        display: flex;
        align-items: center;
    }

    .separator .line {
        height: 1px;
        flex: 1;
        background-color: #4a4a4a;
    }

    .separator h2 {
        padding: 0 1px;
    }

    #btn-wrapper {
        margin-top: 10px;
    }

    .form-group {
        margin: 0;
        position: static;
        display: block;
        overflow: hidden;
        height: 41px;
    }

    .form-group-1 {
        margin: 0;
        position: static;
        display: block;
        overflow: hidden;
    }

    span.maru {
        position: relative;
        left: 160px;
        top: -27px;
        font-size: 26px;
        color: #4a4a4a;
    }

    span.arrow {
        position: relative;
        left: 190px;
        top: -25px;
        font-size: 20px;
        color: #4a4a4a;
    }

    select {
        appearance: none;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    #general .form-group {
        margin-bottom: 5px;
    }

    span#close:hover {
        cursor: pointer;
    }

    .down-ar:before {
        content: "";
        float: right;
        color: #595959;
        position: relative;
        top: -27px;
        right: 7px;
    }

		#close {
			color: #595959;
			box-sizing: border-box;
			position: relative;
			transform: scale(var(--ggs, 1));
			width: 22px;
			height: 22px;
			border: 2px solid transparent;
			border-radius: 40px;
			left: 128px;
			top: 0px;
		}

    #close::after,
    #close::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 16px;
        height: 2px;
        background: currentColor;
        transform: rotate(45deg);
        border-radius: 5px;
        top: 8px;
        left: 1px;
    }

    #close::after {
        transform: rotate(-45deg);
    }

    span.down-ar {
        display: block;
        /* width: 9px; */
        /* height: 9px; */
        overflow: hidden;
        position: relative;
        /* background: #4A4A4A; */
        top: 5px;
        left: 193px;
        transform: rotate(134deg);
    }

    #closed-logo {
        display: none;
        overflow: hidden;
        width: 21px;
        height: 21px;
        cursor: pointer;
        margin-top: 11px;
        margin-left: 12px;
        background: #181618 !important;
        padding: 5px;
        border-radius: 5px;
    }

    .select2-selection__rendered {
			width: calc(100% - 62px);
			background: #181618 !important;
			border: 1px solid #4a4a4a;
			height: 30px;
			color: #c7c5c5 !important;
			font-family: "Noto Sans";
			font-style: normal;
			font-weight: 400;
			font-size: 12px !important;
			line-height: 16px;
		}

    .select2-container--default {
      width: 100px !important;
    }

    .select2-selection__arrow {
      background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5L9 0.5L4.5 5.5L0 0.5Z' fill='%234A4A4A'/%3E%3C/svg%3E%0A") center / contain no-repeat;
      color: #c7c5c5;
      /* position: absolute; */
    }

    .select2-results {
      margin-right: 5px;
    }

    .select2-results__option {
      text-align: left;
      padding-left: 32px;
    }

    .select2-results__options,
    .select2-results__option {
        background: #181618 !important;
        width: 100%;
    }

    .select2-results__options {
      width: 170px;
      color: #c7c5c5 !important;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px !important;
      line-height: 16px;
      position: relative;
      align-items: center;
      border-top: 1px solid #4a4a4a;
    }

    .select2-results__option--highlighted {
      background: #3F3D45 !important;
      padding-left: 5px;
    }

    .select2-results__option--highlighted::before {
      content: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.35355 3.14645C1.15829 2.95118 0.841709 2.95118 0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L3.14645 6.35355C3.34171 6.54882 3.65829 6.54882 3.85355 6.35355L9.35355 0.853554C9.54882 0.658291 9.54882 0.341709 9.35355 0.146447C9.15829 -0.0488155 8.84171 -0.0488155 8.64645 0.146447L3.5 5.29289L1.35355 3.14645Z' fill='%23C7C5C5'/%3E%3C/svg%3E%0A");
      padding-right: 10px;
      padding-left: 6px;
    }

    .select2-results__option .select2-results__option--highlighted {
      background: #181618 !important;
      width: 200px;
    }

    .select2-search,
    .select2-search--dropdown {
      display: none;
    }

    .select2-dropdown,
    .select2-dropdown--below {
      background: #181618 !important;
      margin-left: -5px;
      margin-right: 5px;
      border-color: #3F3D45 !important;
      border-radius: 0;
      width: 172px !important;
    }

    .select2,
    .select2-container,
    .select2-container--custom-select {
      margin-left: 5px;
    }

    .select2-selection, .select2-selection--single {
      background: #181618 !important;
      border: none !important;
      flex-direction: row;
      display: flex;
      width: 202px !important;
    }

    .select2-container--default .select2-selection--single {
      background: #181618 !important;
      color: #c7c5c5 !important;
      border: none !important;
    }

    .select2-container .select2-selection--single .select2-selection__rendered {
      padding-left: 10px;
      padding-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .select2-container--default .select2-results>.select2-results__options {
      overflow-x: hidden;
    }

    .select2-container--default .select2-selection--single .select2-selection__arrow {
			height: 46px;
			position: absolute;
			top: 0px;
			left: 156px;
			width: 20px;
			z-index: 99;
		}

    .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
      /* color: transparent;
      border-color: transparent !important; */
    }

    .select2-container--default .select2-selection--single .select2-selection__arrow b {
      color: transparent;
      border-color: transparent !important;
    }

    .select2-results__message {
      border-top: 1px solid #4a4a4a;
      padding-left: 0px;
      margin: auto;
      text-align: center;
    }

</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <div class="height-46" id="wrapper">
        <h3 id="title">
            <span id="logo">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_901_10043)">
                <path d="M14.8 16.6861V11.7139C14.8 11.6395 14.7803 11.5664 14.7431 11.5022C14.7058 11.4379 14.6523 11.3847 14.5879 11.3481L10.2053 8.85438C10.1427 8.81872 10.0719 8.79999 9.99995 8.79999C9.92798 8.79999 9.85723 8.81872 9.79457 8.85438L5.41196 11.3481C5.34761 11.3847 5.29408 11.4379 5.25683 11.5022C5.21958 11.5664 5.19995 11.6395 5.19995 11.7139V16.6861C5.19995 16.7605 5.21958 16.8335 5.25683 16.8978C5.29408 16.9621 5.34761 17.0152 5.41196 17.0519L9.79457 19.5456C9.85723 19.5813 9.92798 19.6 9.99995 19.6C10.0719 19.6 10.1427 19.5813 10.2053 19.5456L14.5879 17.0519C14.6523 17.0152 14.7058 16.9621 14.7431 16.8978C14.7803 16.8335 14.8 16.7605 14.8 16.6861Z" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.6 8.2861V3.31395C19.6 3.23954 19.5804 3.16647 19.5431 3.1022C19.5059 3.03793 19.4523 2.98477 19.388 2.94815L15.0054 0.454413C14.9427 0.41876 14.872 0.400024 14.8 0.400024C14.728 0.400024 14.6573 0.41876 14.5946 0.454413L10.212 2.94815C10.1477 2.98477 10.0941 3.03793 10.0569 3.1022C10.0196 3.16647 10 3.23954 10 3.31395V8.2861C10 8.36051 10.0196 8.43358 10.0569 8.49785C10.0941 8.56212 10.1477 8.61528 10.212 8.6519L14.5946 11.1456C14.6573 11.1813 14.728 11.2 14.8 11.2C14.872 11.2 14.9427 11.1813 15.0054 11.1456L19.388 8.6519C19.4523 8.61528 19.5059 8.56212 19.5431 8.49785C19.5804 8.43358 19.6 8.36051 19.6 8.2861Z" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 8.2861V3.31395C10 3.23954 9.9804 3.16647 9.94315 3.1022C9.9059 3.03793 9.85236 2.98477 9.78801 2.94815L5.40541 0.454413C5.34275 0.41876 5.272 0.400024 5.20002 0.400024C5.12805 0.400024 5.0573 0.41876 4.99464 0.454413L0.612035 2.94815C0.547688 2.98477 0.494152 3.03793 0.456903 3.1022C0.419653 3.16647 0.400024 3.23954 0.400024 3.31395V8.2861C0.400024 8.36051 0.419653 8.43358 0.456902 8.49785C0.494152 8.56212 0.547688 8.61528 0.612035 8.6519L4.99464 11.1456C5.0573 11.1813 5.12805 11.2 5.20002 11.2C5.272 11.2 5.34275 11.1813 5.40541 11.1456L9.78801 8.6519C9.85236 8.61528 9.9059 8.56212 9.94315 8.49785C9.9804 8.43358 10 8.36051 10 8.2861Z" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.8 11.6C14.8 11.6817 14.7803 11.7619 14.7431 11.8325C14.7058 11.9031 14.6523 11.9615 14.5879 12.0017L10.2053 14.7402C10.1427 14.7794 10.0719 14.8 9.99995 14.8C9.92798 14.8 9.85723 14.7794 9.79457 14.7402L5.41196 12.0017C5.34761 11.9615 5.29408 11.9031 5.25683 11.8325C5.21958 11.7619 5.19995 11.6817 5.19995 11.6" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.6 3.20001C19.6 3.28173 19.5804 3.36198 19.5431 3.43256C19.5059 3.50314 19.4523 3.56152 19.388 3.60173L15.0054 6.34028C14.9427 6.37944 14.872 6.40001 14.8 6.40001C14.728 6.40001 14.6573 6.37944 14.5946 6.34028L10.212 3.60173C10.1477 3.56152 10.0941 3.50314 10.0569 3.43256C10.0196 3.36198 10 3.28173 10 3.20001" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 3.20001C10 3.28173 9.9804 3.36198 9.94315 3.43256C9.9059 3.50314 9.85236 3.56152 9.78801 3.60173L5.40541 6.34028C5.34275 6.37944 5.272 6.40001 5.20002 6.40001C5.12805 6.40001 5.0573 6.37944 4.99464 6.34028L0.612035 3.60173C0.547688 3.56152 0.494152 3.50314 0.456902 3.43256C0.419653 3.36198 0.400024 3.28173 0.400024 3.20001" stroke="#C7C5C5" stroke-linecap="round" stroke-linejoin="round"/>
              </g> 
              <defs> 
                <clipPath id="clip0_901_10043"> <rect width="20" height="20" fill="white"/> </clipPath>
              </defs>
            </svg>
            </span>
            <p class="title-p"> Model Generator </p> <span id="close" data-stt="0">
            </span>
        </h3>
        <div id="form-wrapper">
            <div class="group-div">
                <span id="choose-marker" class="group-title separator">
                    <div class="line"></div>
                    <p>マーカーを選択</p>
                    <div class="line"></div>
                </span>
                <div class="form-group-1">
                    <div class="form-group">
                        <label for="choose-by" class="input-title">選択方法</label>
                        <select id="choose-by" class="custom-select-options" name="state" onchange="getOptions()">
                            <option value="all" class="option1">全て</option>
                            <option value="folder" class="option2">フォルダ</option>
                            <option value="tag" class="option3">タグ</option>
                        </select>
                        <span class="down-ar">
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.5L9 0.5L4.5 5.5L0 0.5Z" fill="#4A4A4A" />
                            </svg>
                        </span>
                    </div>
                    <div id="showFolder" class="form-group showFolder" style="display: none">
                        <label for="select-by" class="input-title">フォルダを選択</label>
                        <select id="select-by" class="custom-select-options"></select>
                        <span class="down-ar">
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.5L9 0.5L4.5 5.5L0 0.5Z" fill="#4A4A4A" />
                            </svg>
                        </span>
                    </div>

                    <div id="showTag" class="form-group showTag" style="display: none">
                        <div class="form-group">
                            <label for="select-parent-tag" class="input-title">タグを選択</label>
                            <select id="select-parent-tag" class="custom-select-options"></select>
                            <span class="down-ar">
                                <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0.5L9 0.5L4.5 5.5L0 0.5Z" fill="#4A4A4A" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group-div" id="general">
                <span id="generate" class="group-title separator">
                    <div class="line"></div>
                    <p>設定</p>
                    <div class="line"></div>
                </span>
                <span class="guide">右パネルから3DModelをアップロード →</span>
                <div class="form-group">
                    <label class="input-title">サイズ</label>
                    <input type="number" id="model-size" value="1" />
                </div>
                <div id="btn-wrapper">
                    <button type="button" id="clean-all-fields" onclick="cleanAllFields()">
                        すべて消去
                    </button>
                    <button type="submit" id="generate-model" onclick="generateModel()">
                        Model作成
                    </button>
                </div>
            </div>
            <div class="group-div" id="export">
                <span id="generate" class="group-title separator">
                    <div class="line"></div>
                    <p>エクスポーター設定</p>
                    <div class="line"></div>
                </span>
                <button type="submit" id="download">CZMLをエクスポート</button>
            </div>
        </div>
    </div>

    <script>

    $("#choose-by").select2({
      allowClear: false,
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function () {
              return "情報は見つかりませんでした";
        }
      }
    });

    $("#select-by").select2({
      allowClear: false,
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function () {
              return "情報は見つかりませんでした";
        }
      }
    });
  
    $("#select-parent-tag").select2({
      allowClear: false,
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function () {
              return "情報は見つかりませんでした";
        }
      }
    });

    $("#select-tag-child").select2({
      allowClear: false,
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function () {
              return "情報は見つかりませんでした";
        }
      }
    });

    let allLayers;
    let markerLayers;
    let modelUrl;
    let czmlData;
    var folders = [];
    var tags = [];
    let markerDataSets = [];

    window.addEventListener("message", function (e) {
        if (e.source !== parent) return;
        allLayers = e.source.reearth.layers;

        getAllData();

        property = e.data.property;
        if (property.hasOwnProperty("default") && property.default.modelUrl) {
            modelUrl = property.default.modelUrl;
        }
    });

    function getAllData() {
        //allLayers = e.source.reearth.layers;

        //get all folder
        folders = allLayers.layers.filter((fo) => fo.type == "" && fo.isVisible == true);

        // get all tags
        tags = allLayers.tags;

        //get all makers
        markerLayers = allLayers.layers.filter((o) => ((o.type == "marker" && o.children == undefined)|| o.type == "model") && o.isVisible == true);
        
        //get data set with type is marker 
        markerDataSets = allLayers.layers.filter(
            (layer) => layer.isVisible == true
            && layer.type == "marker" 
            && (typeof layer.children !== 'undefined')
            );
    }

    //get option value when chose folder or tag
    function getOptions() {
      let chooseMarkerBy = $('#choose-by').select2().val();
      let selectarea = document.getElementById("select-by");
      let tagArea = document.getElementById("select-parent-tag");
      
      if (chooseMarkerBy == "folder") {
          //folders = allLayers?.layers.filter((fo) => fo.type == "" && fo.isVisible == true);
          selectarea.replaceChildren();
          tagArea.replaceChildren();

          showFolder.style.display = "inline";
          showTag.style.display = "none";

          let folderList = getAllFolders();
          // folders?.map(obj => {
          //   getFolderList(obj, folderList);
          // });

          // folderList = folders.concat(folderList);

          // //Combine folders and csv file
          // folderList = folderList.concat(markerDataSets);

          folderList?.map((fd, i) => {
              var opt = document.createElement("option");
              opt.value = fd.id;
              opt.innerHTML = fd.title;
              selectarea.appendChild(opt);
          });
      } else if (chooseMarkerBy == "all") {
          folders = allLayers?.layers.filter((fo) => fo.type == "" && fo.isVisible == true);
          selectarea.replaceChildren();
          tagArea.replaceChildren();

          showFolder.style.display = "none";
          showTag.style.display = "none";
      } else if (chooseMarkerBy == "tag") {
          selectarea.replaceChildren();
          tagArea.replaceChildren();

          showFolder.style.display = "none";
          showTag.style.display = "inline";

          let nameTagList = [];
          //Get name tag list
          tags?.map((tag) => {
            if(tag.tags != undefined && tag.tags.length > 0 ) {
              tag.tags?.map((obj) => {
                if (!nameTagList.includes(obj.label)) {
                  nameTagList.push(obj.label);
                }
              });
            } else {
              if (tag.tags == undefined && !nameTagList.includes(tag.label)) {
                nameTagList.push(tag.label);
              }
            }
          });

          nameTagList?.map((tag) => {
              var opt_t = document.createElement("option");
              opt_t.value = tag;
              opt_t.innerHTML = tag;
              tagArea.appendChild(opt_t);
          });

      }
      let newWapperElm = document.getElementById("wrapper");
      heightWp = newWapperElm.offsetHeight;
      expanded = false;
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
    }

    //get all folders including folder children
    function getFolderList(folderParent, result){
      folderParent.children?.map((obj, index) => {
        if (obj.type == "" && obj.isVisible == true) {
          getFolderList(obj,result);
          result.push(obj);
        } 
      });
        return result;
    }

    //get all folders including folder children
    function getAllFolders(){
      let allFolders = [];
      //get all folder
      let folderParents = allLayers.layers.filter((fo) => fo.type == "" && fo.isVisible == true);

      //get data set with type == marker 
      let markerDataSets = allLayers.layers.filter(
        (layer) => layer.isVisible == true
        && layer.type == "marker" 
        && (typeof layer.children !== 'undefined')
        );

      folderParents?.map(obj => {
        getFolderList(obj, allFolders);
      });
      
      allFolders = folders.concat(allFolders);

      //Combine folders and csv file
      allFolders = allFolders.concat(markerDataSets);

      return allFolders;
    }

    //generate 3d model
    function generateModel() {
      let modelSize;
      let markerLat, markerLng, markerId;
      let tagGroup, tagChild;
      let chooseMarkerBy;
      let folderArr = new Array();
      let allElements = new Array();

      getAllData();

      czmlData = [
          {
              id: "document",
              name: "CZML Model",
              version: "1.0",
          },
      ];
      chooseMarkerBy = document.getElementById("choose-by").value;

      // Choose by folder
      if (chooseMarkerBy == "folder") {
          // get selected folder

          let allFolders = getAllFolders();
          folderLayer = allFolders.filter((layer) => 
            layer.id == document.getElementById("select-by").value 
            && layer.isVisible == true)[0];
          
          // If layer is folder
          if (folderLayer.type == "") {
              getElementsOfFolder(folderLayer, allElements);
          } else if (folderLayer.type == "marker") {
              allElements = folderLayer.children;
          }
      }
      else if (chooseMarkerBy == "tag") { //Choose by tag
        // get input tag
        selectedNameTag = document.getElementById("select-parent-tag").value;
        
        if (selectedNameTag) {
            //get all markers and 3d models
            folders?.map((fd, index) => {
                getElementsOfFolder(fd, allElements);
            });

            //combine with all markers from csv data
            markerDataSets?.map((fd, index) => {
                allElements = allElements.concat(fd.children);
            });

            allElements = markerLayers.concat(allElements);

            //filter by tag group and tag child
            allElements = getMarkerByTag(allElements, selectedNameTag);
        }
      } else {
          //choose by all
          //get all markers and 3d models
          folders?.map((fd, index) => {
              getElementsOfFolder(fd, allElements);
          });

          //combine with all markers from csv data
          markerDataSets?.map((fd, index) => {
              allElements = allElements.concat(fd.children);
          });

          allElements = markerLayers.concat(allElements);
        }

        // Get model attributes value
        modelSize = document.getElementById("model-size").value || 1;

        // Create czml data
        allElements?.map((ml, index) => {
            markerLat = ml.property.default.location.lat;
            markerLng = ml.property.default.location.lng;

            czmlData.push({
                id: "3D Model " + index,
                name: "3D Model",
                position: {
                    cartographicDegrees: [markerLng, markerLat, 0]
                },
                model: {
                    gltf: modelUrl,
                    scale: modelSize,
                    minimumPixelSize: 128,
                    heightReference: "RELATIVE_TO_GROUND",
                },
            });
        });
        parent.postMessage({ type: "showModel", czmlData }, "*");
    }

    //get all marker layers and 3d model layers
    function getElementsOfFolder(folderParent, result) {
        folderParent.children?.map((obj, index) => {
            if (obj.type == "" && obj.isVisible == true) {
                getElementsOfFolder(obj, result);
            } else if ((obj.type == "marker" || obj.type == "model") && obj.isVisible == true) {
                result.push(obj);
            }
        });
        return result;
    }

    // Get marker by selected tag
    function getMarkerByTag(layers, nameTag) {
        let temp = [];
        layers?.map((layer) => {
          if (layer.tags != undefined) {
            layer.tags.map(tagElm => {
              if (tagElm.tags == undefined ) {
                if (tagElm.label == nameTag) {
                  temp.push(layer);
                }
              } else {
                if (tagElm.tags.length > 0) {
                  if (tagElm.tags.some(obj => obj.label == nameTag)) {
                    temp.push(layer);
                  }
                }
              }
            });
          }
        });
        return temp;
    }

    // Clear Model Settings input value 
    function cleanAllFields() {
        document.getElementById("showFolder").style.display = "none";
        document.getElementById("showTag").style.display = "none";
        document.getElementById("model-size").value = 1;
        $('#choose-by').val("all").trigger('change');
        czmlData = [];
        parent.postMessage({ type: "clearModel"}, "*");
    }

    // Download CZML file
    function downloadObjectAsJson(exportObj, exportName) {
        var dataStr =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".czml");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    document.getElementById("download").addEventListener("click", (e) => {
        downloadObjectAsJson(czmlData, "download");
    });

	let expanded = false;
  let resizeElms = document.querySelectorAll(".resize");
  let closeElm = document.getElementById("title");
  closeElm.addEventListener("click", handleCloseOpenPopup);
  let wapperElm = document.getElementById("wrapper");
  let heightWp = wapperElm.offsetHeight;
  if(heightWp < 360) {heightWp = 360}
  function handleCloseOpenPopup(e) {
    let wapperElm = document.getElementById("wrapper");
    if (e.target.id == "title" || e.target.classList.contains("title-p") ||
    (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
            if(wapperElm !== null) {
              wapperElm.classList.remove("height-46");
            }
          if (expanded){
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded
    } else {
      if(e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
        if(e.target.closest("#title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if( wapperElm !== null) {
            wapperElm.classList.remove("height-46");
          }
          if (expanded){
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded
        }
      }
    }
  }
</script>
  `,
  { width: 46, height: 46 }
);

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
  });
}

let modelLayerId;

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 46 : 312,
      msg.expanded ? 46 : msg.heightWp,
      msg.expanded ? undefined : false
    );
  } else if (msg.type === "clearModel") {
    if (modelLayerId) {
      reearth.layers.hide(modelLayerId);
    }
  } else if (msg.type === "showModel") {
    if (modelLayerId) {
      // refresh
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          url: msg.czmlData,
        },
      });

      reearth.layers.show(modelLayerId);
    } else {
      modelLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: `CZML`,
        property: {
          default: {
            url: msg.czmlData,
            type: "czml",
          },
        },
      });
    }
  }
});