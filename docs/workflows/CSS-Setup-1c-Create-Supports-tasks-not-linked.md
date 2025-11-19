**Type:** Ticket workflow  
**Activation:** Internal: <u>Setup[1]: Create Support's tasks</u>  
**Key actions:** Creates reminders and POC tasks  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Setup-1c-Create-Supports-tasks-not-linked.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key points  
- Creates reminders as necessary, depending on *Distribution method* and (for reminder 3) stakeholder group.  
- Creates a differently titled version of each task if *Custom comms* is <u>Yes</u>.  
- All tasks are created with *Priority* set to <u>Medium</u> to trigger task enrolment in <u>CSS3/Setup/Close[2]</u>.  

### Notes  
<i>Zapier returns <u>31/12/1999</u> as the date in cases where reminder 2 should be omitted.</i>  

### Related  
- [CSS/PIPE/Setup[0]: ⇒Setup -- Create CSS tasks & GL issue](../workflows/CSS-PIPE-Setup-0-Setup--Create-CSS-tasks-GL-issue.md)  
- [CSS/Setup[1]: Create Support's tasks](../workflows/CSS-Setup-1-Create-Supports-tasks.md)  
- [CSS3/Setup/Close[2]: Set Support's task dates](../workflows/CSS3-Setup-Close-2-Set-Supports-task-dates.md)  
