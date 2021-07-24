
jQuery(document).ready(function()
{
    jQuery('.showInformation').click(function(){
    jQuery('.infoShow').toggle();
    });
    jQuery('.headerInfo img.close').click(function(){
    jQuery('.infoShow').hide();
    })
})