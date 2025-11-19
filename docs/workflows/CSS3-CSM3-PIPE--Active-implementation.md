<details><summary>Overview</summary>
<p>This workflow ensures that the ticket enters <u>Active implementation</u> correctly set up: with an assigned <em>CSS</em>, an active task and correct report settings/associations.</p><p>It also checks that survey tickets are not associated (as this would cause other workflows to malfunction).</p></details>  

**Type:** Ticket workflow  
**Activation:** *Ticket pipeline* movement  
**Trigger:** *Status* = <u>Active survey implementation</u>  
**Key actions:** As needed, sets default *CSS*, creates the next implementation task in the sequence and flags any ticket errors  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2331124939/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSS3-CSM3-PIPE--Active-implementation.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key steps  
1. Sets *CSS* to default if blank. 
2. Creates the next task(s) in the CSS sequence if not already present.  
3. Checks that if the ticket is associated to a report, the *Report* property is also set, and conversely, if *Report* is <u>No</u>, that no reports are associated. A blank *Report* value will always result in a warning task being generated.  
4. Checks that no survey ticket associations exist.  

### Notes
<i><u>CSM/CSS/Aux/TCKT[1]</u> also triggers when a ticket enters <u>Active implementation</u>, but its function is to preset survey defaults (e.g. *Content* = <u>Not received</u>). This is not an essential function – no workflows will malfunction if that workflow were disabled. This workflow checks properties and associations that are essential for other workflows to run properly.</i>  

### Related  
- [CSM/CSS/Aux/TCKT[1]: Set defaults for active surveys](../workflows/CSM-CSS-Aux-TCKT[1]-Set-defaults-for-active-surveys.md)  
