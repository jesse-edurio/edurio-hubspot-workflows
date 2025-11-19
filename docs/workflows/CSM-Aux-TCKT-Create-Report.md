**Type:** Ticket workflow  
**Activation:** *CSM: Create*  
**Trigger:** Internal: <u>CSM/Aux/TCKT/GTLB: Create Report/Survey tickets...</u>    
**Key actions:** Creates report tickets + sets *HSTrigger* = <u>Create report task</u>   
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2256694466/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-Aux-TCKT-Create-Report.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Key points  
- Titles report ticket depending on *Report?* and also marks first report using *Report-Is-First-Associated* property.   
- Triggers <u>Create report task</u> for any ticket in <u>Setup</u> stage or later.  

### Related  
- [CSM/Aux/TCKT/GTLB: Create Report/Survey tickets or Data export issues for CSMs](../workflows/CSM-Aux-TCKT-GTLB-Create-Report-Survey-tickets-Data-export-issues.md)  
- [CSM/CSS/TSK/Aux: Create or update tasks in assoc. tickets](../workflows/CSM-CSS-TSK-Aux-Create-update-tasks-assoc.md)  
- [HSTrigger](../articles/Workflow-internal-properties.md#hstrigger)  
