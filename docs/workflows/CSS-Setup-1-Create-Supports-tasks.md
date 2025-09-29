**Type:** Ticket workflow  
**Activation:** Zapier return  
**Trigger:** *Link to Gitlab Setup* changed to <u>https...</u>  
**Key actions:** Creates Support's survey launch tasks + triggers workflow to create remaining tasks    

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS-Setup-1-Create-Supports-tasks.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Creates 1 launch survey task for each template.
2. Sends high-priority setup warning to Support on Slack (Zapier flags this using *Link to Gitlab close* temporarily).  

### Notes  
<i>Linked implementation setup task lists are different in that <u>Update POC</u> and <u>Ask about close</u> are created only for the primary survey, not for each.</i>  

### Related  
- [CSS/PIPE/Setup[0]: ⇒Setup -- Create CSS tasks & GL issue](../workflows/CSS-PIPE-Setup-0-Setup--Create-CSS-tasks-GL-issue.md)  
- [CSS/Setup[1a]: Create Support's tasks (first linked)](../workflows/CSS-Setup-1a-Create-Supports-tasks-first-linked.md)  
- [CSS/Setup[1b]: Create Support's tasks (not first linked)](../workflows/CSS-Setup-1b-Create-Supports-tasks-not-first-linked.md)  
- [CSS/Setup[1c]: Create Support's tasks (not linked)](../workflows/CSS-Setup-1c-Create-Supports-tasks-not-linked.md)  
