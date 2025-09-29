**Type:** Task workflow  
**Activation:** Internal: Task creation  
**Trigger:** *Priority* = <u>Medium</u> + *Assigned to* a CSS member   
**Key actions:** Sets the dates of Support's tasks and assigns them to Support      

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS3-Setup-Close-2-Set-Supports-task-dates.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Notes  
<i>As Zapier uses the same date properties for both setup and close, this same workflow is used to set the dates for both processes.</i>  

### Related  
- [CSS/PIPE/Setup[0]: ⇒Setup -- Create CSS tasks & GL issue](../workflows/CSS-PIPE-Setup-0-Setup--Create-CSS-tasks-GL-issue.md)  
- [CSS/Setup[1]: Create Support's tasks](../workflows/CSS-Setup-1-Create-Supports-tasks.md)  
- [CSS/PIPE/Close[0]: ⇒Live -- Create task & GL issue](../workflows/CSS-PIPE-Close-0-Live--Create-task-GL-issue.md)  
- [CSS/Close[1]: Create Support's task(s)](../workflows/CSS-Close-1-Create-Supports-task(s).md)  
