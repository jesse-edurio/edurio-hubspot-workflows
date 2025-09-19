**Activation:** activator  
**Triggers:** triggers  
**Enrolment filters:** filters  
**Actions:** actions  

<div id="viewer" style="width:100%;height:520px;border:1px solid #ddd;"></div>

<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/workflow-title.png";

    OpenSeadragon({
      id: "viewer",
      prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/",
      tileSources: { type: "image", url: imgUrl, buildPyramid: false },
      showNavigator: true,
      showZoomControl: true,
      showHomeControl: true,
      showFullPageControl: false
    });
  });
</script>

### Key steps  
1. first

### Notes  
Additional comments

### Related  
- [Home](../index.md)
