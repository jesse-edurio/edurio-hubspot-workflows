**Type:** Ticket workflow  
**Activation:** Internal: <u>CSM/Deal/TCKT: Create survey ticket(s) for deal</u>, <u>CSM/Aux/TCKT/GTLB: Create Report/Survey tickets</u>, <u>CSM/CSS/Aux/TCKT[1]</u>    
**Trigger:** New ticket creation  
**Enrolment conditions:** In <u>Survey Implementation</u> pipeline  
**Key actions:** Mark <u>Data export</u> in ticket if required + set *CSS* based on defaults if blank  
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2265453804/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM3-CSS3-Aux-TCKT[0]-Set-defaults-for-new-surveys.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Related  
- [CSM/Deal/TCKT: Create survey ticket(s) for deal]()  
- [CSM/CSS/Aux/TCKT[1]](../workflows/CSM-CSS-Aux-TCKT[1]-Set-defaults-for-active-surveys.md)  
- [Exports property](../articles/User-controlled-property-triggers-flags.md#exports)  
