<details><summary>Overview</summary>
<p><em>Content</em> and <em>Dataset</em> default to <u>Not received</u> unless already set, although <i>open distribution</i> forces <em>Dataset</em> to <u>Not needed</u>. <em>Admins</em> is now set to <u>Self-serve</u> by default.</p><p>As it is possible for tickets to 'jump' stages in the pipeline, this workflow triggers <u>CSM3/CSS3/Aux/TCKT[0]</u> in case it has been missed earlier.</p></details>  

**Type:** Ticket workflow  
**Activation:** *Ticket pipeline* movement  
**Trigger:** *Status* = <u>Active survey implementation</u>  
**Key actions:** Sets default values for *Admins*, *Dataset* and *Content* where appropriate + triggers <u>CSM3/CSS3/Aux/TCKT[0]</u>     
<a target="_blank" href="https://app-eu1.hubspot.com/workflows/3479931/platform/flow/2610120934/edit">Link</a>  

<div id="viewer" style="width:100%;height:60vh;border:1px solid #ddd;"></div>
<script src="https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/openseadragon.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var basePath = window.location.pathname.replace(/\/workflows\/.*/, '/');
    var imgUrl = basePath + "images/CSM-CSS-Aux-TCKT[1]-Set-defaults-for-active-surveys.png";
    OpenSeadragon({ id: "viewer", prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@4.1/build/openseadragon/images/", tileSources: { type: "image", url: imgUrl, buildPyramid: false }, showNavigator: true, showZoomControl: true, showHomeControl: true, showFullPageControl: false });
  });
</script>

### Related  
- [CSM3/CSS3/Aux/TCKT[0]: Set defaults for new surveys](../workflows/CSM3-CSS3-Aux-TCKT[0]-Set-defaults-for-new-surveys.md)  
- [CSS3/CSM3/PIPE: ⇒Active implementation](../workflows/CSS3-CSM3-PIPE--Active-implementation.md)  
