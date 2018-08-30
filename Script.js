function Dot(props) {
  return React.createElement("div", { id: props.id });
}

function DotWithVideoLinkInside(props) {
  return React.createElement(
    "div",
    { id: props.id },
    React.createElement(VideoLink, { id: props.videoLink_id, videoLink_src: props.videoLink_src, name: props.videoLink_name })
  );
}

function VideoLink(props) {
  var videoLink_src = props.videoLink_src;

  function startVideo() {
    document.getElementById("videoScreenSaver").style.visibility = "hidden";
    document.getElementById("video").src = videoLink_src;
    document.getElementById("video").play();
  }

  return React.createElement(
    "a",
    { href: "#", onClick: startVideo },
    React.createElement(
      "div",
      { id: props.id },
      props.name
    )
  );
}

function LinkButton(props) {
  return React.createElement(
    "a",
    { href: props.href },
    React.createElement(
      "div",
      { id: props.id },
      props.name
    )
  );
}

function DotWithLinkButtonInside(props) {
  return React.createElement(
    "div",
    { id: props.id },
    React.createElement(LinkButton, { id: props.link_ID, name: props.link_name, href: props.link_href })
  );
}

function DotWithLinksInside(props) {
  return React.createElement(
    "div",
    { id: props.id },
    React.createElement(LinkButton, { id: props.link1_ID, name: props.link1_name, href: props.link1_href }),
    React.createElement(LinkButton, { id: props.link2_ID, name: props.link2_name, href: props.link2_href })
  );
}

function OrangeDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(DotWithLinksInside, { id: "horizontalDot1", link1_name: "soundcloud", link1_href: "http://soundcloud.com/flajin", link1_ID: "soundcloud",
                                              link2_name: "facebook", link2_href: "https://www.facebook.com/flajin/", link2_ID: "facebook"}),
/*    React.createElement(Dot, { id: "horizontalDot1" }),*/
    React.createElement(Dot, { id: "horizontalDot2" }),
    React.createElement(DotWithVideoLinkInside, { id: "horizontalDot3", videoLink_id: "videoLink_blue", videoLink_src: "blue.mp4", videoLink_name: "BLUE" }),
    React.createElement(Dot, { id: "horizontalDot4" }),
    React.createElement(DotWithVideoLinkInside, { id: "horizontalDot5", videoLink_id: "videoLink_sex", videoLink_src: "se.mp4", videoLink_name: "SEX" })
  );
}

function GreenDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Dot, { id: "horizontalDot6" }),
    React.createElement(Dot, { id: "horizontalDot7" }),
    React.createElement(Dot, { id: "horizontalDot8" }),
    React.createElement(Dot, { id: "horizontalDot9" }),
    React.createElement(Dot, { id: "horizontalDot10" })
  );
}

function BlueDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Dot, { id: "verticalDot1" }),
    React.createElement(Dot, { id: "verticalDot2" }),
    React.createElement(Dot, { id: "verticalDot3" }),
    React.createElement(Dot, { id: "verticalDot4" }),
    React.createElement(Dot, { id: "verticalDot5" }),
    React.createElement(Dot, { id: "verticalDot6" }),
    React.createElement(Dot, { id: "verticalDot7" }),
    React.createElement(Dot, { id: "verticalDot8" }),
    React.createElement(Dot, { id: "verticalDot9" }),
    React.createElement(Dot, { id: "verticalDot10" })
  );
}

function RedDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Dot, { id: "verticalDot11" }),
    React.createElement(Dot, { id: "verticalDot12" }),
    React.createElement(Dot, { id: "verticalDot13" }),
    React.createElement(Dot, { id: "verticalDot14" }),
    React.createElement(Dot, { id: "verticalDot15" }),
    React.createElement(Dot, { id: "verticalDot16" }),
    React.createElement(Dot, { id: "verticalDot17" }),
    React.createElement(Dot, { id: "verticalDot18" }),
    React.createElement(Dot, { id: "verticalDot19" }),
    React.createElement(Dot, { id: "verticalDot20" })
  );
}

function HorizontalDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(OrangeDots, null),
    React.createElement(GreenDots, null)
  );
}

function VerticalDots(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(BlueDots, null),
    React.createElement(RedDots, null)
  );
}

function VideoScreenBorder(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(Dot, { id: "videoScreenBorderDot1" }),
    React.createElement(Dot, { id: "videoScreenBorderDot2" }),
    React.createElement(Dot, { id: "videoScreenBorderDot3" }),
    React.createElement(Dot, { id: "videoScreenBorderDot4" }),
    React.createElement(Dot, { id: "videoScreenBorderDot5" }),
    React.createElement(Dot, { id: "videoScreenBorderDot6" }),
    React.createElement(Dot, { id: "videoScreenBorderDot7" }),
    React.createElement(Dot, { id: "videoScreenBorderDot8" }),
    React.createElement(Dot, { id: "videoScreenBorderDot9" }),
    React.createElement(Dot, { id: "videoScreenBorderDot10" }),
    React.createElement(Dot, { id: "videoScreenBorderDot11" }),
    React.createElement(Dot, { id: "videoScreenBorderDot12" }),
    React.createElement(Dot, { id: "videoScreenBorderDot13" }),
    React.createElement(Dot, { id: "videoScreenBorderDot14" }),
    React.createElement(Dot, { id: "videoScreenBorderDot15" }),
    React.createElement(Dot, { id: "videoScreenBorderDot16" }),
    React.createElement(Dot, { id: "videoScreenBorderDot17" }),
    React.createElement(Dot, { id: "videoScreenBorderDot18" }),
    React.createElement(Dot, { id: "videoScreenBorderDot19" }),
    React.createElement(Dot, { id: "videoScreenBorderDot20" }),
    React.createElement(Dot, { id: "videoScreenBorderDot21" }),
    React.createElement(Dot, { id: "videoScreenBorderDot22" }),
    React.createElement(Dot, { id: "videoScreenBorderDot23" }),
    React.createElement(Dot, { id: "videoScreenBorderDot24" }),
    React.createElement(Dot, { id: "videoScreenBorderDot25" }),
    React.createElement(Dot, { id: "videoScreenBorderDot26" }),
    React.createElement(Dot, { id: "videoScreenBorderDot27" }),
    React.createElement(Dot, { id: "videoScreenBorderDot28" }),
    React.createElement(Dot, { id: "videoScreenBorderDot29" }),
    React.createElement(Dot, { id: "videoScreenBorderDot30" }),
    React.createElement(Dot, { id: "videoScreenBorderDot31" }),
    React.createElement(Dot, { id: "videoScreenBorderDot32" }),
    React.createElement(Dot, { id: "videoScreenBorderDot33" }),
    React.createElement(Dot, { id: "videoScreenBorderDot34" })
  );
}

function VideoScreen(props) {
  return React.createElement(
    "div",
    { id: "videoScreenContainer" },
    React.createElement(
      "div",
      { id: "videoScreen" },
      React.createElement("video", { id: "video", type: "video/mp4" }),
      React.createElement(
        "div",
        { id: "videoScreenButtons" },
        React.createElement(
          "button",
          { type: "button", id: "videoScreen_play-pause", "class": "play" },
          "START/STOP"
        ),
        React.createElement("input", { type: "range", id: "videoScreen_seek" }),
        React.createElement("input", { type: "range", id: "videoScreen_volume", min: "0", max: "1", step: "0.1" }),
        React.createElement(
          "button",
          { type: "button", id: "videoScreen_full-screen" },
          "FULL"
        )
      )
    )
  );
}

function VideoScreenSaver() {
  return React.createElement(
    "div",
    { id: "videoScreen" },
    React.createElement(
      "div",
      { id: "videoScreenSaver" },
      React.createElement("div", { id: "screenSaverDot1" }),
      React.createElement("div", { id: "screenSaverDot2" }),
      React.createElement("div", { id: "screenSaverDot3" }),
      React.createElement("div", { id: "screenSaverDot4" }),
      React.createElement("div", { id: "screenSaverDot5" }),
      React.createElement("div", { id: "screenSaverDot6" }),
      React.createElement("div", { id: "screenSaverDot7" }),
      React.createElement("div", { id: "screenSaverDot8" }),
      React.createElement("div", { id: "screenSaverDot9" }),
      React.createElement("div", { id: "screenSaverDot10" }),
      React.createElement("div", { id: "screenSaverDot11" }),
      React.createElement("div", { id: "screenSaverDot12" })
    )
  );
}

function MakeFlyingWebpage(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(HorizontalDots, null),
    React.createElement(VideoScreenBorder, null),
    React.createElement(VideoScreen, null),
    React.createElement(VideoScreenSaver, null),
    React.createElement(VerticalDots, null)
  );
}

const app = React.createElement(MakeFlyingWebpage, null);
ReactDOM.render(
  app,
  document.getElementById('root')
);

var video = document.getElementById("video");
var playButton = document.getElementById("videoScreen_play-pause");
var fullScreenButton = document.getElementById("videoScreen_full-screen");
var seekBar = document.getElementById("videoScreen_seek");
var volumeBar = document.getElementById("videoScreen_volume");

playButton.addEventListener("click", function() {
	if (video.paused == true)
		video.play();
	else
		video.pause();
});

fullScreenButton.addEventListener("click", function() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen(); // Firefox
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen(); // Chrome and Safari
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen(); // Chrome and Safari
	}
});

seekBar.addEventListener("change", function() {
	var time = video.duration * (seekBar.value / 100);
	video.currentTime = time;
});

video.addEventListener("timeupdate", function() {
	var value = (100 / video.duration) * video.currentTime;
	seekBar.value = value;
});

seekBar.addEventListener("mousedown", function() {  video.pause(); });
seekBar.addEventListener("mouseup", function() {	video.play();  });
volumeBar.addEventListener("change", function() { video.volume = volumeBar.value; });
