(function () {
    const currentScript = document.currentScript || {};
    const onDOMReady = (callback) => {
      if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
      ) {
        callback();
      } else {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  
    onDOMReady(() => {
      const title =
        currentScript.getAttribute("title") || "We stand with Palestine";
  
      const ribbonBanner = document.createElement("div");
      ribbonBanner.setAttribute("id", "we-stand-with-palestine");
  
      Object.assign(ribbonBanner.style, {
        width: "300px",
        height: "84px",
        position: "fixed",
        left: "-80px",
        bottom: "20px",
        transform: "rotate(45deg)",
        zIndex: "999",
        background: `linear-gradient(to bottom,
                #000000 0%, #000000 33.33%,
                #ffffff 33.33%, #ffffff 66.66%,
                #007a3d 66.66%, #007a3d 100%)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      });
  
      const redTriangle = document.createElement("div");
      Object.assign(redTriangle.style, {
        position: "absolute",
        width: "33.33%",
        height: "100%",
        background: "#CE1126",
        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        left: "0",
        zIndex: "1",
      });
  
      const text = document.createElement("div");
      text.textContent = title;
      Object.assign(text.style, {
        position: "absolute",
        top: "33.33%",
        height: "33.33%",
        width: "66.67%", 
        left: "22.33%", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "500",
        color: "#000",
        fontFamily:
          "Poppins, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
        fontSize: "11px",
        zIndex: "2", 
      });
  
      ribbonBanner.addEventListener("click", () => {
        ribbonBanner.remove();
      });
  
      ribbonBanner.title = "Tap to remove";
      ribbonBanner.appendChild(redTriangle);
      ribbonBanner.appendChild(text);
  
      document.body.appendChild(ribbonBanner);
  
      //!TODO:- Auto hide while overlapping content underneath the ribbon banner
    });
  })();
