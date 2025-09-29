**Type:** Ticket workflow  
**Activation:** Zapier return  
**Trigger:** *Link to Gitlab Close* changed to <u>https...</u>  
**Key actions:** Creates a Support close task for each survey      

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Close-1-Create-Supports-task(s).png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
- Creates 1 <u>unassign close issue</u> task for each template.  
- Tasks are created with *Priority* set to <u>Medium</u> to trigger task enrolment in <u>CSS3/Setup/Close[2]</u>.  

### Related  
- [CSS/PIPE/Close[0]: ⇒Live -- Create task & GL issue](../workflows/CSS-PIPE-Close-0-Live--Create-task-GL-issue.md)  
- [CSS3/Setup/Close[2]: Set Support's task dates](../workflows/CSS3-Setup-Close-2-Set-Supports-task-dates(2).md)  
