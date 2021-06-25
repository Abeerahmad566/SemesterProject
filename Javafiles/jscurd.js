$(function () {
  token();
  loadApple();
  $("#Apple").on("click", ".deleteApple", handleDeleteApple);
  $("#AddAppleRecord").click(addRecordApple);
  $("#login").click(login);
  $("#logout").click(logout)
  $(".gosomewherelp").click(loadlatestiph);
  $(".gosomewherenok").click(loadlatestnok);
  $(".gosomewheres21").click(loadlatestsam);
  $(".gosomewherenov").click(loadlatestnov);
  $(".gosomewhererog").click(loadlatestrog);
  $(".gosomewhere9pro").click(loadlatestonep);
  loadAsus();
  $("#Asus").on("click", ".deleteAsus", handleDeleteAsus);
  $("#AddAsusRecord").click(addRecordAsus);
  loadGoogle();
  $("#Google").on("click", ".deleteGoogle", handleDeleteGoogle);
  $("#AddGoogleRecord").click(addRecordGoogle);
  loadHtc();
  $("#Htc").on("click", ".deleteHtc", handleDeleteHtc);
  $("#AddHtcRecord").click(addRecordHtc);
  loadHuawei();
  $("#Huawei").on("click", ".deleteHuawei", handleDeleteHuawei);
  $("#AddHuaweiRecord").click(addRecordHuawei);
  loadLenovo();
  $("#Lenovo").on("click", ".deleteLenovo", handleDeleteLenovo);
  $("#AddLenovoRecord").click(addRecordLenovo);
  loadLG();
  $("#LG").on("click", ".deleteLG", handleDeleteLG);
  $("#AddLGRecord").click(addRecordLG);
  loadMotorola();
  $("#Motorola").on("click", ".deleteMotorola", handleDeleteMotorola);
  $("#AddMotorolaRecord").click(addRecordMotorola);
  loadNokia();
  $("#Nokia").on("click", ".deleteNokia", handleDeleteNokia);
  $("#AddNokiaRecord").click(addRecordNokia);
  loadOnePlus();
  $("#OnePlus").on("click", ".deleteOnePlus", handleDeleteOnePlus);
  $("#AddOnePlusRecord").click(addRecordOnePlus);
  loadOppo();
  $("#Oppo").on("click", ".deleteOppo", handleDeleteOppo);
  $("#AddOppoRecord").click(addRecordOppo);
  loadPOCO();
  $("#POCO").on("click", ".deletePOCO", handleDeletePOCO);
  $("#AddPOCORecord").click(addRecordPOCO);
  loadRealme();
  $("#Realme").on("click", ".deleteRealme", handleDeleteRealme);
  $("#AddRealmeRecord").click(addRecordRealme);
  loadsamsung();
  $("#Samsung").on("click", ".deleteSamsung", handleDeleteSamsung);
  $("#AddSamsungRecord").click(addRecordSamsung);
  loadTechno();
  $("#Techno").on("click", ".deleteTechno", handleDeleteTechno);
  $("#AddTechnoRecord").click(addRecordTechno);
  loadVivo();
  $("#Vivo").on("click", ".deleteVivo", handleDeleteVivo);
  $("#AddVivoRecord").click(addRecordVivo);
  loadXiaomi();
  $("#Xiaomi").on("click", ".deleteXiaomi", handleDeleteXiaomi);
  $("#AddXiaomiRecord").click(addRecordXiaomi);
  loadZTE();
  $("#ZTE").on("click", ".deleteZTE", handleDeleteZTE);
  $("#AddZTERecord").click(addRecordZTE);
});
const isloggedin = Boolean(window.localStorage.getItem("token"));
function logout ()
{
  window.localStorage.removeItem("token");
}
function token()
{
  console.log(isloggedin)
  if(isloggedin) 
  {
    $(".btn-info").show();
    $("#login").hide();
    $("#logout").show();
  }
  if(!isloggedin)
  {
    $(".btn-info").hide();
    $("#login").show();
  $("#logout").hide();
}
}
function login()
{
  var email =$("#loginemail").val();
  var password = $("#loginpassword").val();
  $.ajax({
    url:"https://abeertech-serverside.herokuapp.com/api/users/login",
    method:"POST",
    data:{email ,password },
    error: function(response) {
      alert(response.responseText)
    },
    success:function(response){
      window.localStorage.setItem("token",response);
      console.log(response);
      window.location.replace("http://127.0.0.1:5501/MainPages/main.html");
  

     
    }
});
}
function addRecordApple()
{
  document.getElementById('UpdateAppleid01').style.display='block';
  var name = $("#addnameApple").val();
  var Price = $("#addPriceApple").val();
  var picture= $("#addPictureApple").val();
  var technology= $("#addTechnologyApple").val();
  var Announced= $("#addAnnouncedApple").val();
  var Dimension= $("#addDimensionApple").val();
  var Weight= $("#addWeightApple").val();
  var Build= $("#addBuildApple").val();
  var Sim= $("#addSimApple").val();
  var Type= $("#addDisplayTypeApple").val();
  var Size= $("#addDisplaySizeApple").val();
  var Resolution= $("#addResolutionApple").val();
  var Os = $("#addOsApple").val();
  var Chipset= $("#addChipsetApple").val();
  var Cpu= $("#addCPUApple").val();
  var FrontCamera= $("#addSelfieCameraApple").val();
  var Gpu= $("#addGPUApple").val();
  var CardSlot= $("#addCardSlotApple").val();
  var Internal= $("#addInternalStorageApple").val();
  var Camera= $("#addMainCameraApple").val();
  var Sound= $("#addSoundsApple").val();
  var Comms= $("#addCommsApple").val();
  var Features= $("#addSensorFeaturesApple").val();
  var Battery= $("#addBatteryApple").val();
  var Colors= $("#addColorsApple").val();
  var mcamFeatures= $("#addMainCameraFeaturesApple").val();
  var mcamVideo= $("#addMainCameraVideoApple").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesApple").val();
  var ScamVideo= $("#addSelfieCameraVideoApple").val();
  var Bluetooth= $("#addBluetoothApple").val();
  var NFC= $("#addNFCApple").val();
  var Radio= $("#addRadioApple").val();
  var GPS= $("#addGPSApple").val();
  var Charging= $("#addChargingApple").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Apple",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(response){
            console.log(response);
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadApple() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Apple",
    method: "GET",
    success: function(response) {
      var phones
       = $("#Apple");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDApple(iddd);

});
    }
  });
}
function loadonIDApple(id)
  {

   if(isloggedin)
   {
  
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Apple/"+id,
      method: "GET",
      success: function(response) {
        var phones
         = $("#Apple");
        phones
        .empty();
        console.log(response._id);
        phones
        .append(
          "<div class='PicturesPhoneApple ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteApple'>delete</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
   }
   if(!isloggedin)
   {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Apple/"+id,
      method: "GET",
      success: function(response) {
        var phones
         = $("#Apple");
        phones
        .empty();
        console.log(response._id);
        phones
        .append(
          "<div class='PicturesPhoneApple ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
   }
  }
function handleDeleteApple() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneApple  ");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Apple/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadApple();
      }
    });
  }
  function loadlatestiph()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Apple/60d2482f4c07e82e6e83ffc6",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function loadlatestnov()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Huawei/60d0e81c092df0ff776e1dd5",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function loadlatestnok()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Nokia/60d0e899092df0ff776e1dd6",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function loadlatestonep()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Oneplus/60d0e940092df0ff776e1dda",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function loadlatestrog()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Asus/60d24ca74c07e82e6e83ffc7",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function loadlatestsam()
  {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Samsung/60cf3443111ebe26c3af36ed",
      method: "GET",
      success: function(response) {
        var phones = $("#mainpage");
        phones.empty();
        console.log(response._id);
        phones.append(
          "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  function addRecordAsus()
{
  var name = $("#addnameAsus").val();
  var Price = $("#addPriceAsus").val();
  var picture= $("#addPictureAsus").val();
  var technology= $("#addTechnologyAsus").val();
  var Announced= $("#addAnnouncedAsus").val();
  var Dimension= $("#addDimensionAsus").val();
  var Weight= $("#addWeightAsus").val();
  var Build= $("#addBuildAsus").val();
  var Sim= $("#addSimAsus").val();
  var Type= $("#addDisplayTypeAsus").val();
  var Size= $("#addDisplaySizeAsus").val();
  var Resolution= $("#addResolutionAsus").val();
  var Os = $("#addOsAsus").val();
  var Chipset= $("#addChipsetAsus").val();
  var Cpu= $("#addCPUAsus").val();
  var FrontCamera= $("#addSelfieCameraAsus").val();
  var Gpu= $("#addGPUAsus").val();
  var CardSlot= $("#addCardSlotAsus").val();
  var Internal= $("#addInternalStorageAsus").val();
  var Camera= $("#addMainCameraAsus").val();
  var Sound= $("#addSoundsAsus").val();
  var Comms= $("#addCommsAsus").val();
  var Features= $("#addSensorFeaturesAsus").val();
  var Battery= $("#addBatteryAsus").val();
  var Colors= $("#addColorsAsus").val();
  var mcamFeatures= $("#addMainCameraFeaturesAsus").val();
  var mcamVideo= $("#addMainCameraVideoAsus").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesAsus").val();
  var ScamVideo= $("#addSelfieCameraVideoAsus").val();
  var Bluetooth= $("#addBluetoothAsus").val();
  var NFC= $("#addNFCAsus").val();
  var Radio= $("#addRadioAsus").val();
  var GPS= $("#addGPSAsus").val();
  var Charging= $("#addChargingAsus").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Asus",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
  function loadAsus() {
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Asus",
      method: "GET",
      success: function(response) {
        var phones = $("#Asus");
        phones.empty();
     
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          
        phones.append(
            "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
          ); 
        }
        $('.gosomewhere').click(function()
        {
          var iddd=$(this).closest('.card').attr('data-id');
          loadonIDAsus(iddd);
  
  });
      }
    });
  }
  function loadonIDAsus(id)
    {
      if(isloggedin)
      {
        $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Asus/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Asus");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneAsus ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteAsus'>delete</button><button class='btn btn-warning btn-sm float-right editAsus'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
}
if(!isloggedin)
{
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Asus/"+id,
    method: "GET",
    success: function(response) {
      var phones = $("#Asus");
      phones.empty();
      console.log(response._id);
      phones.append(
        "<div class='PicturesPhoneAsus ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
      );     
}
});
}
    }
    
  function handleDeleteAsus() {
      var btn = $(this);
      var parentDiv = btn.closest(".PicturesPhoneAsus  ");
      let id = parentDiv.attr("data-id");
      
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Asus/" + id,
        method: "DELETE",
        success: function() {
          $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
          loadAsus();
        }
      });
    }

function addRecordGoogle()
    {
      var name = $("#addnameGoogle").val();
      var Price = $("#addPriceGoogle").val();
      var picture= $("#addPictureGoogle").val();
      var technology= $("#addTechnologyGoogle").val();
      var Announced= $("#addAnnouncedGoogle").val();
      var Dimension= $("#addDimensionGoogle").val();
      var Weight= $("#addWeightGoogle").val();
      var Build= $("#addBuildGoogle").val();
      var Sim= $("#addSimGoogle").val();
      var Type= $("#addDisplayTypeGoogle").val();
      var Size= $("#addDisplaySizeGoogle").val();
      var Resolution= $("#addResolutionGoogle").val();
      var Os = $("#addOsGoogle").val();
      var Chipset= $("#addChipsetGoogle").val();
      var Cpu= $("#addCPUGoogle").val();
      var FrontCamera= $("#addSelfieCameraGoogle").val();
      var Gpu= $("#addGPUGoogle").val();
      var CardSlot= $("#addCardSlotGoogle").val();
      var Internal= $("#addInternalStorageGoogle").val();
      var Camera= $("#addMainCameraGoogle").val();
      var Sound= $("#addSoundsGoogle").val();
      var Comms= $("#addCommsGoogle").val();
      var Features= $("#addSensorFeaturesGoogle").val();
      var Battery= $("#addBatteryGoogle").val();
      var Colors= $("#addColorsGoogle").val();
      var mcamFeatures= $("#addMainCameraFeaturesGoogle").val();
      var mcamVideo= $("#addMainCameraVideoGoogle").val();
      var ScamFeatures= $("#addSelfieCameraFeaturesGoogle").val();
      var ScamVideo= $("#addSelfieCameraVideoGoogle").val();
      var Bluetooth= $("#addBluetoothGoogle").val();
      var NFC= $("#addNFCGoogle").val();
      var Radio= $("#addRadioGoogle").val();
      var GPS= $("#addGPSGoogle").val();
      var Charging= $("#addChargingGoogle").val();
      $.ajax({
              url:"https://abeertech-serverside.herokuapp.com/api/Google",
              method:"POST",
              data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
              success:function(response){
                console.log(response);
               $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                
              }
      });
    
    }
function loadGoogle() {
     
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Google",
        method: "GET",
        success: function(response) {
          var phones = $("#Google");
          phones.empty();
          
          for (var i = 0; i < response.length; i++) {
            var rec = response[i];
            
          phones.append(
              "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
            ); 
          }
          $('.gosomewhere').click(function()
          {
            var iddd=$(this).closest('.card').attr('data-id');
            loadonIDGoogle(iddd);
    
    });
        }
      });
    }
function loadonIDGoogle(id)
  {
      if(isloggedin)
      {
        $.ajax({
          url: "https://abeertech-serverside.herokuapp.com/api/Google/"+id,
          method: "GET",
          success: function(response) {
            var phones = $("#Google");
            phones.empty();
            console.log(response._id);
            phones.append(
              "<div class='PicturesPhoneGoogle ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteGoogle'>delete</button><button class='btn btn-warning btn-sm float-right editGoogle'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
            );     
      }
    });
  }
if(!isloggedin)
{
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Google/"+id,
    method: "GET",
    success: function(response) {
      var phones = $("#Google");
      phones.empty();
      console.log(response._id);
      phones.append(
        "<div class='PicturesPhoneGoogle ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
      );     
}
});
}
      }
      
function handleDeleteGoogle() {
        var btn = $(this);
        var parentDiv = btn.closest(".PicturesPhoneGoogle  ");
        let id = parentDiv.attr("data-id");
        $.ajax({
          url: "https://abeertech-serverside.herokuapp.com/api/Google/" + id,
          method: "DELETE",
          success: function() {
            $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            loadGoogle();
          }
        });
      }
function addRecordHtc()
      {
        var name = $("#addnameHtc").val();
        var Price = $("#addPriceHtc").val();
        var picture= $("#addPictureHtc").val();
        var technology= $("#addTechnologyHtc").val();
        var Announced= $("#addAnnouncedHtc").val();
        var Dimension= $("#addDimensionHtc").val();
        var Weight= $("#addWeightHtc").val();
        var Build= $("#addBuildHtc").val();
        var Sim= $("#addSimHtc").val();
        var Type= $("#addDisplayTypeHtc").val();
        var Size= $("#addDisplaySizeHtc").val();
        var Resolution= $("#addResolutionHtc").val();
        var Os = $("#addOsHtc").val();
        var Chipset= $("#addChipsetHtc").val();
        var Cpu= $("#addCPUHtc").val();
        var FrontCamera= $("#addSelfieCameraHtc").val();
        var Gpu= $("#addGPUHtc").val();
        var CardSlot= $("#addCardSlotHtc").val();
        var Internal= $("#addInternalStorageHtc").val();
        var Camera= $("#addMainCameraHtc").val();
        var Sound= $("#addSoundsHtc").val();
        var Comms= $("#addCommsHtc").val();
        var Features= $("#addSensorFeaturesHtc").val();
        var Battery= $("#addBatteryHtc").val();
        var Colors= $("#addColorsHtc").val();
        var mcamFeatures= $("#addMainCameraFeaturesHtc").val();
        var mcamVideo= $("#addMainCameraVideoHtc").val();
        var ScamFeatures= $("#addSelfieCameraFeaturesHtc").val();
        var ScamVideo= $("#addSelfieCameraVideoHtc").val();
        var Bluetooth= $("#addBluetoothHtc").val();
        var NFC= $("#addNFCHtc").val();
        var Radio= $("#addRadioHtc").val();
        var GPS= $("#addGPSHtc").val();
        var Charging= $("#addChargingHtc").val();
        $.ajax({
                url:"https://abeertech-serverside.herokuapp.com/api/Htc",
                method:"POST",
                data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
                success:function(response){
                  console.log(response);
                 $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                  
                }
        });
      
      }
function loadHtc() {
        
        $.ajax({
          url: "https://abeertech-serverside.herokuapp.com/api/Htc",
          method: "GET",
          success: function(response) {
            var phones = $("#Htc");
            phones.empty();
          
            for (var i = 0; i < response.length; i++) {
              var rec = response[i];
              
            phones.append(
                "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
              ); 
            }
            $('.gosomewhere').click(function()
            {
              var iddd=$(this).closest('.card').attr('data-id');
              loadonIDHtc(iddd);
      
      });
          }
        });
      }
function loadonIDHtc(id)
{
if(isloggedin)
{          
          $.ajax({
            url: "https://abeertech-serverside.herokuapp.com/api/Htc/"+id,
            method: "GET",
            success: function(response) {
              var phones = $("#Htc");
              phones.empty();
              console.log(response._id);
              phones.append(
                "<div class='PicturesPhoneHtc ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteHtc'>delete</button><button class='btn btn-warning btn-sm float-right editHtc'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
              );     
        }
      });
    }
if(!isloggedin)
    {          
        
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Htc/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Htc");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneHtc ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
}
        }
        
function handleDeleteHtc() {
          var btn = $(this);
          var parentDiv = btn.closest(".PicturesPhoneHtc  ");
          let id = parentDiv.attr("data-id");
         
          $.ajax({
            url: "https://abeertech-serverside.herokuapp.com/api/Htc/" + id,
            method: "DELETE",
            success: function() {
              $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
              loadHtc();
            }
          });
        }  
function addRecordHuawei()
        {
          var name = $("#addnameHuawei").val();
          var Price = $("#addPriceHuawei").val();
          var picture= $("#addPictureHuawei").val();
          var technology= $("#addTechnologyHuawei").val();
          var Announced= $("#addAnnouncedHuawei").val();
          var Dimension= $("#addDimensionHuawei").val();
          var Weight= $("#addWeightHuawei").val();
          var Build= $("#addBuildHuawei").val();
          var Sim= $("#addSimHuawei").val();
          var Type= $("#addDisplayTypeHuawei").val();
          var Size= $("#addDisplaySizeHuawei").val();
          var Resolution= $("#addResolutionHuawei").val();
          var Os = $("#addOsHuawei").val();
          var Chipset= $("#addChipsetHuawei").val();
          var Cpu= $("#addCPUHuawei").val();
          var FrontCamera= $("#addSelfieCameraHuawei").val();
          var Gpu= $("#addGPUHuawei").val();
          var CardSlot= $("#addCardSlotHuawei").val();
          var Internal= $("#addInternalStorageHuawei").val();
          var Camera= $("#addMainCameraHuawei").val();
          var Sound= $("#addSoundsHuawei").val();
          var Comms= $("#addCommsHuawei").val();
          var Features= $("#addSensorFeaturesHuawei").val();
          var Battery= $("#addBatteryHuawei").val();
          var Colors= $("#addColorsHuawei").val();
          var mcamFeatures= $("#addMainCameraFeaturesHuawei").val();
          var mcamVideo= $("#addMainCameraVideoHuawei").val();
          var ScamFeatures= $("#addSelfieCameraFeaturesHuawei").val();
          var ScamVideo= $("#addSelfieCameraVideoHuawei").val();
          var Bluetooth= $("#addBluetoothHuawei").val();
          var NFC= $("#addNFCHuawei").val();
          var Radio= $("#addRadioHuawei").val();
          var GPS= $("#addGPSHuawei").val();
          var Charging= $("#addChargingHuawei").val();
          $.ajax({
                  url:"https://abeertech-serverside.herokuapp.com/api/Huawei",
                  method:"POST",
                  data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
                  success:function(response){
                    console.log(response);
                   $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                    
                  }
          });
        
        }
function loadHuawei() {
         
          $.ajax({
            url: "https://abeertech-serverside.herokuapp.com/api/Huawei",
            method: "GET",
            success: function(response) {
              var phones = $("#Huawei");
              phones.empty();
              
              for (var i = 0; i < response.length; i++) {
                var rec = response[i];
                
              phones.append(
                  "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
                ); 
              }
              $('.gosomewhere').click(function()
              {
                var iddd=$(this).closest('.card').attr('data-id');
                loadonIDHuawei(iddd);
        
        });
            }
          });
        }
function loadonIDHuawei(id)
{
if(isloggedin)
{           
    $.ajax({
              url: "https://abeertech-serverside.herokuapp.com/api/Huawei/"+id,
              method: "GET",
              success: function(response) {
                var phones = $("#Huawei");
                phones.empty();
                
                phones.append(
                  "<div class='PicturesPhoneHuawei ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteHuawei'>delete</button><button class='btn btn-warning btn-sm float-right editHuawei'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
                );     
          }
        });
      }
if(!isloggedin)
{           
    $.ajax({
              url: "https://abeertech-serverside.herokuapp.com/api/Huawei/"+id,
              method: "GET",
              success: function(response) {
                var phones = $("#Huawei");
                phones.empty();
                
                phones.append(
                  "<div class='PicturesPhoneHuawei ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
                );     
          }
        });
      }
}
          
function handleDeleteHuawei() {
            var btn = $(this);
            var parentDiv = btn.closest(".PicturesPhoneHuawei  ");
            let id = parentDiv.attr("data-id");
           ;
            $.ajax({
              url: "https://abeertech-serverside.herokuapp.com/api/Huawei/" + id,
              method: "DELETE",
              success: function() {
                $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                loadHuawei();
              }
            });
 }  
function addRecordLenovo()
          {
            var name = $("#addnameLenovo").val();
            var Price = $("#addPriceLenovo").val();
            var picture= $("#addPictureLenovo").val();
            var technology= $("#addTechnologyLenovo").val();
            var Announced= $("#addAnnouncedLenovo").val();
            var Dimension= $("#addDimensionLenovo").val();
            var Weight= $("#addWeightLenovo").val();
            var Build= $("#addBuildLenovo").val();
            var Sim= $("#addSimLenovo").val();
            var Type= $("#addDisplayTypeLenovo").val();
            var Size= $("#addDisplaySizeLenovo").val();
            var Resolution= $("#addResolutionLenovo").val();
            var Os = $("#addOsLenovo").val();
            var Chipset= $("#addChipsetLenovo").val();
            var Cpu= $("#addCPULenovo").val();
            var FrontCamera= $("#addSelfieCameraLenovo").val();
            var Gpu= $("#addGPULenovo").val();
            var CardSlot= $("#addCardSlotLenovo").val();
            var Internal= $("#addInternalStorageLenovo").val();
            var Camera= $("#addMainCameraLenovo").val();
            var Sound= $("#addSoundsLenovo").val();
            var Comms= $("#addCommsLenovo").val();
            var Features= $("#addSensorFeaturesLenovo").val();
            var Battery= $("#addBatteryLenovo").val();
            var Colors= $("#addColorsLenovo").val();
            var mcamFeatures= $("#addMainCameraFeaturesLenovo").val();
            var mcamVideo= $("#addMainCameraVideoLenovo").val();
            var ScamFeatures= $("#addSelfieCameraFeaturesLenovo").val();
            var ScamVideo= $("#addSelfieCameraVideoLenovo").val();
            var Bluetooth= $("#addBluetoothLenovo").val();
            var NFC= $("#addNFCLenovo").val();
            var Radio= $("#addRadioLenovo").val();
            var GPS= $("#addGPSLenovo").val();
            var Charging= $("#addChargingLenovo").val();
            $.ajax({
                    url:"https://abeertech-serverside.herokuapp.com/api/Lenovo",
                    method:"POST",
                    data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
                    success:function(){
                    
                     $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                      
                    }
            });
          
}
function loadLenovo() {
           
            $.ajax({
              url: "https://abeertech-serverside.herokuapp.com/api/Lenovo",
              method: "GET",
              success: function(response) {
                var phones = $("#Lenovo");
                phones.empty();
                for (var i = 0; i < response.length; i++) {
                  var rec = response[i];
                phones.append(
                    "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
                  ); 
                }
                $('.gosomewhere').click(function()
                {
                  var iddd=$(this).closest('.card').attr('data-id');
                  loadonIDLenovo(iddd);
          
          });
              }
            });
}
function loadonIDLenovo(id)
{
  if(isloggedin)
  {           
      $.ajax({
                url: "https://abeertech-serverside.herokuapp.com/api/Lenovo/"+id,
                method: "GET",
                success: function(response) {
                  var phones = $("#Lenovo");
                  phones.empty();
                  
                  phones.append(
                    "<div class='PicturesPhoneHuawei ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteHuawei'>delete</button><button class='btn btn-warning btn-sm float-right editHuawei'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
                  );     
            }
          });
        }
  if(!isloggedin)
  {           
      $.ajax({
                url: "https://abeertech-serverside.herokuapp.com/api/Lenovo/"+id,
                method: "GET",
                success: function(response) {
                  var phones = $("#Lenovo");
                  phones.empty();
                  
                  phones.append(
                    "<div class='PicturesPhoneLenovo' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
                  );     
            }
          });
        }
  }       
function handleDeleteLenovo() {
              var btn = $(this);
              var parentDiv = btn.closest(".PicturesPhoneLenovo  ");
              let id = parentDiv.attr("data-id");
              $.ajax({
                url: "https://abeertech-serverside.herokuapp.com/api/Lenovo/" + id,
                method: "DELETE",
                success: function() {
                  $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                  loadLenovo();
                }
              });
 }
 function addRecordLG()
{
  var name = $("#addnameLG").val();
  var Price = $("#addPriceLG").val();
  var picture= $("#addPictureLG").val();
  var technology= $("#addTechnologyLG").val();
  var Announced= $("#addAnnouncedLG").val();
  var Dimension= $("#addDimensionLG").val();
  var Weight= $("#addWeightLG").val();
  var Build= $("#addBuildLG").val();
  var Sim= $("#addSimLG").val();
  var Type= $("#addDisplayTypeLG").val();
  var Size= $("#addDisplaySizeLG").val();
  var Resolution= $("#addResolutionLG").val();
  var Os = $("#addOsLG").val();
  var Chipset= $("#addChipsetLG").val();
  var Cpu= $("#addCPULG").val();
  var FrontCamera= $("#addSelfieCameraLG").val();
  var Gpu= $("#addGPULG").val();
  var CardSlot= $("#addCardSlotLG").val();
  var Internal= $("#addInternalStorageLG").val();
  var Camera= $("#addMainCameraLG").val();
  var Sound= $("#addSoundsLG").val();
  var Comms= $("#addCommsLG").val();
  var Features= $("#addSensorFeaturesLG").val();
  var Battery= $("#addBatteryLG").val();
  var Colors= $("#addColorsLG").val();
  var mcamFeatures= $("#addMainCameraFeaturesLG").val();
  var mcamVideo= $("#addMainCameraVideoLG").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesLG").val();
  var ScamVideo= $("#addSelfieCameraVideoLG").val();
  var Bluetooth= $("#addBluetoothLG").val();
  var NFC= $("#addNFCLG").val();
  var Radio= $("#addRadioLG").val();
  var GPS= $("#addGPSLG").val();
  var Charging= $("#addChargingLG").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/LG",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadLG() {
  
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/LG",
    method: "GET",
    success: function(response) {
      var phones = $("#LG");
      phones.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDLG(iddd);

});
    }
  });
}
function loadonIDLG(id)
  {
    
    if(isloggedin)
      {
        $.ajax({
          url: "https://abeertech-serverside.herokuapp.com/api/LG/"+id,
          method: "GET",
          success: function(response) {
            var phones = $("#LG");
            phones.empty();
            console.log(response._id);
            phones.append(
              "<div class='PicturesPhoneLG ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteLG'>delete</button><button class='btn btn-warning btn-sm float-right editLG'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
            );     
      }
    });
      }
      if(!isloggedin)
      {
        $.ajax({
          url: "https://abeertech-serverside.herokuapp.com/api/LG/"+id,
          method: "GET",
          success: function(response) {
            var phones = $("#LG");
            phones.empty();
            console.log(response._id);
            phones.append(
              "<div class='PicturesPhoneLG ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
            );     
      }
    });
      }
    
  }
  
function handleDeleteLG() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneLG  ");
    let id = parentDiv.attr("data-id");
  
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/LG/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadLG();
      }
    });
}
function addRecordMotorola()
{
  var name = $("#addnameMotorola").val();
  var Price = $("#addPriceMotorola").val();
  var picture= $("#addPictureMotorola").val();
  var technology= $("#addTechnologyMotorola").val();
  var Announced= $("#addAnnouncedMotorola").val();
  var Dimension= $("#addDimensionMotorola").val();
  var Weight= $("#addWeightMotorola").val();
  var Build= $("#addBuildMotorola").val();
  var Sim= $("#addSimMotorola").val();
  var Type= $("#addDisplayTypeMotorola").val();
  var Size= $("#addDisplaySizeMotorola").val();
  var Resolution= $("#addResolutionMotorola").val();
  var Os = $("#addOsMotorola").val();
  var Chipset= $("#addChipsetMotorola").val();
  var Cpu= $("#addCPUMotorola").val();
  var FrontCamera= $("#addSelfieCameraMotorola").val();
  var Gpu= $("#addGPUMotorola").val();
  var CardSlot= $("#addCardSlotMotorola").val();
  var Internal= $("#addInternalStorageMotorola").val();
  var Camera= $("#addMainCameraMotorola").val();
  var Sound= $("#addSoundsMotorola").val();
  var Comms= $("#addCommsMotorola").val();
  var Features= $("#addSensorFeaturesMotorola").val();
  var Battery= $("#addBatteryMotorola").val();
  var Colors= $("#addColorsMotorola").val();
  var mcamFeatures= $("#addMainCameraFeaturesMotorola").val();
  var mcamVideo= $("#addMainCameraVideoMotorola").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesMotorola").val();
  var ScamVideo= $("#addSelfieCameraVideoMotorola").val();
  var Bluetooth= $("#addBluetoothMotorola").val();
  var NFC= $("#addNFCMotorola").val();
  var Radio= $("#addRadioMotorola").val();
  var GPS= $("#addGPSMotorola").val();
  var Charging= $("#addChargingMotorola").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Motorola",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadMotorola() {
  
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Motorola",
    method: "GET",
    success: function(response) {
      var phones = $("#Motorola");
      phones.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDMotorola(iddd);

});
    }
  });
}
function loadonIDMotorola(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Motorola/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Motorola");
          phones.empty();
          
          phones.append(
            "<div class='PicturesPhoneMotorola ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteMotorola'>delete</button><button class='btn btn-warning btn-sm float-right editMotorola'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Motorola/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Motorola");
          phones.empty();
        
          phones.append(
            "<div class='PicturesPhoneMotorola ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteMotorola() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneMotorola  ");
    let id = parentDiv.attr("data-id");
  
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Motorola/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadMotorola();
      }
    });
}
function addRecordNokia()
{
  var name = $("#addnameNokia").val();
  var Price = $("#addPriceNokia").val();
  var picture= $("#addPictureNokia").val();
  var technology= $("#addTechnologyNokia").val();
  var Announced= $("#addAnnouncedNokia").val();
  var Dimension= $("#addDimensionNokia").val();
  var Weight= $("#addWeightNokia").val();
  var Build= $("#addBuildNokia").val();
  var Sim= $("#addSimNokia").val();
  var Type= $("#addDisplayTypeNokia").val();
  var Size= $("#addDisplaySizeNokia").val();
  var Resolution= $("#addResolutionNokia").val();
  var Os = $("#addOsNokia").val();
  var Chipset= $("#addChipsetNokia").val();
  var Cpu= $("#addCPUNokia").val();
  var FrontCamera= $("#addSelfieCameraNokia").val();
  var Gpu= $("#addGPUNokia").val();
  var CardSlot= $("#addCardSlotNokia").val();
  var Internal= $("#addInternalStorageNokia").val();
  var Camera= $("#addMainCameraNokia").val();
  var Sound= $("#addSoundsNokia").val();
  var Comms= $("#addCommsNokia").val();
  var Features= $("#addSensorFeaturesNokia").val();
  var Battery= $("#addBatteryNokia").val();
  var Colors= $("#addColorsNokia").val();
  var mcamFeatures= $("#addMainCameraFeaturesNokia").val();
  var mcamVideo= $("#addMainCameraVideoNokia").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesNokia").val();
  var ScamVideo= $("#addSelfieCameraVideoNokia").val();
  var Bluetooth= $("#addBluetoothNokia").val();
  var NFC= $("#addNFCNokia").val();
  var Radio= $("#addRadioNokia").val();
  var GPS= $("#addGPSNokia").val();
  var Charging= $("#addChargingNokia").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Nokia",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
            
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadNokia() {
  
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Nokia",
    method: "GET",
    success: function(response) {
      var phones = $("#Nokia");
      phones.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDNokia(iddd);

});
    }
  });
}
function loadonIDNokia(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Nokia/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Nokia");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneNokia ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteNokia'>delete</button><button class='btn btn-warning btn-sm float-right editNokia'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Nokia/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Nokia");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneNokia ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteNokia() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneNokia  ");
    let id = parentDiv.attr("data-id");
    
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Nokia/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadNokia();
      }
    });
}
function addRecordOnePlus()
{
  var name = $("#addnameOnePlus").val();
  var Price = $("#addPriceOnePlus").val();
  var picture= $("#addPictureOnePlus").val();
  var technology= $("#addTechnologyOnePlus").val();
  var Announced= $("#addAnnouncedOnePlus").val();
  var Dimension= $("#addDimensionOnePlus").val();
  var Weight= $("#addWeightOnePlus").val();
  var Build= $("#addBuildOnePlus").val();
  var Sim= $("#addSimOnePlus").val();
  var Type= $("#addDisplayTypeOnePlus").val();
  var Size= $("#addDisplaySizeOnePlus").val();
  var Resolution= $("#addResolutionOnePlus").val();
  var Os = $("#addOsOnePlus").val();
  var Chipset= $("#addChipsetOnePlus").val();
  var Cpu= $("#addCPUOnePlus").val();
  var FrontCamera= $("#addSelfieCameraOnePlus").val();
  var Gpu= $("#addGPUOnePlus").val();
  var CardSlot= $("#addCardSlotOnePlus").val();
  var Internal= $("#addInternalStorageOnePlus").val();
  var Camera= $("#addMainCameraOnePlus").val();
  var Sound= $("#addSoundsOnePlus").val();
  var Comms= $("#addCommsOnePlus").val();
  var Features= $("#addSensorFeaturesOnePlus").val();
  var Battery= $("#addBatteryOnePlus").val();
  var Colors= $("#addColorsOnePlus").val();
  var mcamFeatures= $("#addMainCameraFeaturesOnePlus").val();
  var mcamVideo= $("#addMainCameraVideoOnePlus").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesOnePlus").val();
  var ScamVideo= $("#addSelfieCameraVideoOnePlus").val();
  var Bluetooth= $("#addBluetoothOnePlus").val();
  var NFC= $("#addNFCOnePlus").val();
  var Radio= $("#addRadioOnePlus").val();
  var GPS= $("#addGPSOnePlus").val();
  var Charging= $("#addChargingOnePlus").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/OnePlus",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadOnePlus() {
  
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/OnePlus",
    method: "GET",
    success: function(response) {
      var phones = $("#OnePlus");
      phones.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDOnePlus(iddd);

});
    }
  });
}
function loadonIDOnePlus(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/OnePlus/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#OnePlus");
          phones.empty();
          
          phones.append(
            "<div class='PicturesPhoneOnePlus ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteOnePlus'>delete</button><button class='btn btn-warning btn-sm float-right editOnePlus'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/OnePlus/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#OnePlus");
          phones.empty();
          
          phones.append(
            "<div class='PicturesPhoneOnePlus ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteOnePlus() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneOnePlus  ");
    let id = parentDiv.attr("data-id");
   
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/OnePlus/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadOnePlus();
      }
    });
}
function addRecordOppo()
{
  var name = $("#addnameOppo").val();
  var Price = $("#addPriceOppo").val();
  var picture= $("#addPictureOppo").val();
  var technology= $("#addTechnologyOppo").val();
  var Announced= $("#addAnnouncedOppo").val();
  var Dimension= $("#addDimensionOppo").val();
  var Weight= $("#addWeightOppo").val();
  var Build= $("#addBuildOppo").val();
  var Sim= $("#addSimOppo").val();
  var Type= $("#addDisplayTypeOppo").val();
  var Size= $("#addDisplaySizeOppo").val();
  var Resolution= $("#addResolutionOppo").val();
  var Os = $("#addOsOppo").val();
  var Chipset= $("#addChipsetOppo").val();
  var Cpu= $("#addCPUOppo").val();
  var FrontCamera= $("#addSelfieCameraOppo").val();
  var Gpu= $("#addGPUOppo").val();
  var CardSlot= $("#addCardSlotOppo").val();
  var Internal= $("#addInternalStorageOppo").val();
  var Camera= $("#addMainCameraOppo").val();
  var Sound= $("#addSoundsOppo").val();
  var Comms= $("#addCommsOppo").val();
  var Features= $("#addSensorFeaturesOppo").val();
  var Battery= $("#addBatteryOppo").val();
  var Colors= $("#addColorsOppo").val();
  var mcamFeatures= $("#addMainCameraFeaturesOppo").val();
  var mcamVideo= $("#addMainCameraVideoOppo").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesOppo").val();
  var ScamVideo= $("#addSelfieCameraVideoOppo").val();
  var Bluetooth= $("#addBluetoothOppo").val();
  var NFC= $("#addNFCOppo").val();
  var Radio= $("#addRadioOppo").val();
  var GPS= $("#addGPSOppo").val();
  var Charging= $("#addChargingOppo").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Oppo",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
            
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadOppo() {

  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Oppo",
    method: "GET",
    success: function(response) {
      var phones = $("#Oppo");
      phones.empty();
      
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDOppo(iddd);

});
    }
  });
}
function loadonIDOppo(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Oppo/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Oppo");
          phones.empty();
          
          phones.append(
            "<div class='PicturesPhoneOppo ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteOppo'>delete</button><button class='btn btn-warning btn-sm float-right editOppo'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Oppo/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Oppo");
          phones.empty();
          
          phones.append(
            "<div class='PicturesPhoneOppo ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteOppo() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneOppo  ");
    let id = parentDiv.attr("data-id");
    
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Oppo/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadOppo();
      }
    });
}
function addRecordPOCO()
{
  var name = $("#addnamePOCO").val();
  var Price = $("#addPricePOCO").val();
  var picture= $("#addPicturePOCO").val();
  var technology= $("#addTechnologyPOCO").val();
  var Announced= $("#addAnnouncedPOCO").val();
  var Dimension= $("#addDimensionPOCO").val();
  var Weight= $("#addWeightPOCO").val();
  var Build= $("#addBuildPOCO").val();
  var Sim= $("#addSimPOCO").val();
  var Type= $("#addDisplayTypePOCO").val();
  var Size= $("#addDisplaySizePOCO").val();
  var Resolution= $("#addResolutionPOCO").val();
  var Os = $("#addOsPOCO").val();
  var Chipset= $("#addChipsetPOCO").val();
  var Cpu= $("#addCPUPOCO").val();
  var FrontCamera= $("#addSelfieCameraPOCO").val();
  var Gpu= $("#addGPUPOCO").val();
  var CardSlot= $("#addCardSlotPOCO").val();
  var Internal= $("#addInternalStoragePOCO").val();
  var Camera= $("#addMainCameraPOCO").val();
  var Sound= $("#addSoundsPOCO").val();
  var Comms= $("#addCommsPOCO").val();
  var Features= $("#addSensorFeaturesPOCO").val();
  var Battery= $("#addBatteryPOCO").val();
  var Colors= $("#addColorsPOCO").val();
  var mcamFeatures= $("#addMainCameraFeaturesPOCO").val();
  var mcamVideo= $("#addMainCameraVideoPOCO").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesPOCO").val();
  var ScamVideo= $("#addSelfieCameraVideoPOCO").val();
  var Bluetooth= $("#addBluetoothPOCO").val();
  var NFC= $("#addNFCPOCO").val();
  var Radio= $("#addRadioPOCO").val();
  var GPS= $("#addGPSPOCO").val();
  var Charging= $("#addChargingPOCO").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/POCO",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
            
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadPOCO() {
  
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/POCO",
    method: "GET",
    success: function(response) {
      var phones = $("#POCO");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDPOCO(iddd);

});
    }
  });
}
function loadonIDPOCO(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/POCO/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#POCO");
          phones.empty();
          phones.append(
            "<div class='PicturesPhonePOCO ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deletePOCO'>delete</button><button class='btn btn-warning btn-sm float-right editPOCO'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/POCO/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#POCO");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhonePOCO ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  } 
function handleDeletePOCO() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhonePOCO  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/POCO/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadPOCO();
      }
    });
}
function addRecordRealme()
{
  var name = $("#addnameRealme").val();
  var Price = $("#addPriceRealme").val();
  var picture= $("#addPictureRealme").val();
  var technology= $("#addTechnologyRealme").val();
  var Announced= $("#addAnnouncedRealme").val();
  var Dimension= $("#addDimensionRealme").val();
  var Weight= $("#addWeightRealme").val();
  var Build= $("#addBuildRealme").val();
  var Sim= $("#addSimRealme").val();
  var Type= $("#addDisplayTypeRealme").val();
  var Size= $("#addDisplaySizeRealme").val();
  var Resolution= $("#addResolutionRealme").val();
  var Os = $("#addOsRealme").val();
  var Chipset= $("#addChipsetRealme").val();
  var Cpu= $("#addCPURealme").val();
  var FrontCamera= $("#addSelfieCameraRealme").val();
  var Gpu= $("#addGPURealme").val();
  var CardSlot= $("#addCardSlotRealme").val();
  var Internal= $("#addInternalStorageRealme").val();
  var Camera= $("#addMainCameraRealme").val();
  var Sound= $("#addSoundsRealme").val();
  var Comms= $("#addCommsRealme").val();
  var Features= $("#addSensorFeaturesRealme").val();
  var Battery= $("#addBatteryRealme").val();
  var Colors= $("#addColorsRealme").val();
  var mcamFeatures= $("#addMainCameraFeaturesRealme").val();
  var mcamVideo= $("#addMainCameraVideoRealme").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesRealme").val();
  var ScamVideo= $("#addSelfieCameraVideoRealme").val();
  var Bluetooth= $("#addBluetoothRealme").val();
  var NFC= $("#addNFCRealme").val();
  var Radio= $("#addRadioRealme").val();
  var GPS= $("#addGPSRealme").val();
  var Charging= $("#addChargingRealme").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Realme",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
            
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadRealme() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Realme",
    method: "GET",
    success: function(response) {
      var phones = $("#Realme");
      phones.empty(); 
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDRealme(iddd);

});
    }
  });
}
function loadonIDRealme(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Realme/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Realme");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneRealme ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteRealme'>delete</button><button class='btn btn-warning btn-sm float-right editRealme'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Realme/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Realme");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneRealme ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteRealme() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneRealme  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Realme/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadRealme();
      }
    });
}
function addRecordSamsung()
{
  var name = $("#addnameSamsung").val();
  var Price = $("#addPriceSamsung").val();
  var picture= $("#addPictureSamsung").val();
  var technology= $("#addTechnologySamsung").val();
  var Announced= $("#addAnnouncedSamsung").val();
  var Dimension= $("#addDimensionSamsung").val();
  var Weight= $("#addWeightSamsung").val();
  var Build= $("#addBuildSamsung").val();
  var Sim= $("#addSimSamsung").val();
  var Type= $("#addDisplayTypeSamsung").val();
  var Size= $("#addDisplaySizeSamsung").val();
  var Resolution= $("#addResolutionSamsung").val();
  var Os = $("#addOsSamsung").val();
  var Chipset= $("#addChipsetSamsung").val();
  var Cpu= $("#addCPUSamsung").val();
  var FrontCamera= $("#addSelfieCameraSamsung").val();
  var Gpu= $("#addGPUSamsung").val();
  var CardSlot= $("#addCardSlotSamsung").val();
  var Internal= $("#addInternalStorageSamsung").val();
  var Camera= $("#addMainCameraSamsung").val();
  var Sound= $("#addSoundsSamsung").val();
  var Comms= $("#addCommsSamsung").val();
  var Features= $("#addSensorFeaturesSamsung").val();
  var Battery= $("#addBatterySamsung").val();
  var Colors= $("#addColorsSamsung").val();
  var mcamFeatures= $("#addMainCameraFeaturesSamsung").val();
  var mcamVideo= $("#addMainCameraVideoSamsung").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesSamsung").val();
  var ScamVideo= $("#addSelfieCameraVideoSamsung").val();
  var Bluetooth= $("#addBluetoothSamsung").val();
  var NFC= $("#addNFCSamsung").val();
  var Radio= $("#addRadioSamsung").val();
  var GPS= $("#addGPSSamsung").val();
  var Charging= $("#addChargingSamsung").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/samsung",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadsamsung() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/samsung",
    method: "GET",
    success: function(response) {
      var phones = $("#Samsung");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];  
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDSamsung(iddd);

});
    }
  });
}
function loadonIDSamsung(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/samsung/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Samsung");
          phones.empty();
          phones.append(
            "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteSamsung'>delete</button><button class='btn btn-warning btn-sm float-right editSamsung'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/samsung/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Samsung");
          phones.empty();
          phones.append(
            "<div class='PicturesPhone' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteSamsung() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhone");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/samsung/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadsamsung();
      }
    });
}
function addRecordTechno()
{
  var name = $("#addnameTechno").val();
  var Price = $("#addPriceTechno").val();
  var picture= $("#addPictureTechno").val();
  var technology= $("#addTechnologyTechno").val();
  var Announced= $("#addAnnouncedTechno").val();
  var Dimension= $("#addDimensionTechno").val();
  var Weight= $("#addWeightTechno").val();
  var Build= $("#addBuildTechno").val();
  var Sim= $("#addSimTechno").val();
  var Type= $("#addDisplayTypeTechno").val();
  var Size= $("#addDisplaySizeTechno").val();
  var Resolution= $("#addResolutionTechno").val();
  var Os = $("#addOsTechno").val();
  var Chipset= $("#addChipsetTechno").val();
  var Cpu= $("#addCPUTechno").val();
  var FrontCamera= $("#addSelfieCameraTechno").val();
  var Gpu= $("#addGPUTechno").val();
  var CardSlot= $("#addCardSlotTechno").val();
  var Internal= $("#addInternalStorageTechno").val();
  var Camera= $("#addMainCameraTechno").val();
  var Sound= $("#addSoundsTechno").val();
  var Comms= $("#addCommsTechno").val();
  var Features= $("#addSensorFeaturesTechno").val();
  var Battery= $("#addBatteryTechno").val();
  var Colors= $("#addColorsTechno").val();
  var mcamFeatures= $("#addMainCameraFeaturesTechno").val();
  var mcamVideo= $("#addMainCameraVideoTechno").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesTechno").val();
  var ScamVideo= $("#addSelfieCameraVideoTechno").val();
  var Bluetooth= $("#addBluetoothTechno").val();
  var NFC= $("#addNFCTechno").val();
  var Radio= $("#addRadioTechno").val();
  var GPS= $("#addGPSTechno").val();
  var Charging= $("#addChargingTechno").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Techno",
          method:"POST",
          data:{ name, Price,picture,technology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadTechno() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Techno",
    method: "GET",
    success: function(response) {
      var phones = $("#Techno");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDTechno(iddd);

});
    }
  });
}
function loadonIDTechno(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Techno/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Techno");
          phones.empty();
          phones.append(
            "<div class='PicturesPhoneTechno ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteTechno'>delete</button><button class='btn btn-warning btn-sm float-right editTechno'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Techno/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Techno");
          phones.empty();
          phones.append(
            "<div class='PicturesPhoneTechno ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Technology</td><td>"+response.technology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteTechno() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneTechno  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Techno/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadTechno();
      }
    });

}
function addRecordVivo()
{
  var name = $("#addnameVivo").val();
  var Price = $("#addPriceVivo").val();
  var picture= $("#addPictureVivo").val();
  var Vivology= $("#addVivologyVivo").val();
  var Announced= $("#addAnnouncedVivo").val();
  var Dimension= $("#addDimensionVivo").val();
  var Weight= $("#addWeightVivo").val();
  var Build= $("#addBuildVivo").val();
  var Sim= $("#addSimVivo").val();
  var Type= $("#addDisplayTypeVivo").val();
  var Size= $("#addDisplaySizeVivo").val();
  var Resolution= $("#addResolutionVivo").val();
  var Os = $("#addOsVivo").val();
  var Chipset= $("#addChipsetVivo").val();
  var Cpu= $("#addCPUVivo").val();
  var FrontCamera= $("#addSelfieCameraVivo").val();
  var Gpu= $("#addGPUVivo").val();
  var CardSlot= $("#addCardSlotVivo").val();
  var Internal= $("#addInternalStorageVivo").val();
  var Camera= $("#addMainCameraVivo").val();
  var Sound= $("#addSoundsVivo").val();
  var Comms= $("#addCommsVivo").val();
  var Features= $("#addSensorFeaturesVivo").val();
  var Battery= $("#addBatteryVivo").val();
  var Colors= $("#addColorsVivo").val();
  var mcamFeatures= $("#addMainCameraFeaturesVivo").val();
  var mcamVideo= $("#addMainCameraVideoVivo").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesVivo").val();
  var ScamVideo= $("#addSelfieCameraVideoVivo").val();
  var Bluetooth= $("#addBluetoothVivo").val();
  var NFC= $("#addNFCVivo").val();
  var Radio= $("#addRadioVivo").val();
  var GPS= $("#addGPSVivo").val();
  var Charging= $("#addChargingVivo").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Vivo",
          method:"POST",
          data:{ name, Price,picture,Vivology,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadVivo() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Vivo",
    method: "GET",
    success: function(response) {
      var phones = $("#Vivo");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDVivo(iddd);

});
    }
  });
}
function loadonIDVivo(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Vivo/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Vivo");
          phones.empty();
          phones.append(
            "<div class='PicturesPhoneVivo ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteVivo'>delete</button><button class='btn btn-warning btn-sm float-right editVivo'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Vivology</td><td>"+response.Vivology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Vivo/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Vivo");
          phones.empty();
          phones.append(
            "<div class='PicturesPhoneVivo ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Vivology</td><td>"+response.Vivology+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteVivo() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneVivo  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Vivo/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadVivo();
      }
    });
}
function addRecordXiaomi()
{
  var name = $("#addnameXiaomi").val();
  var Price = $("#addPriceXiaomi").val();
  var picture= $("#addPictureXiaomi").val();
  var Xiaomilogy= $("#addXiaomilogyXiaomi").val();
  var Announced= $("#addAnnouncedXiaomi").val();
  var Dimension= $("#addDimensionXiaomi").val();
  var Weight= $("#addWeightXiaomi").val();
  var Build= $("#addBuildXiaomi").val();
  var Sim= $("#addSimXiaomi").val();
  var Type= $("#addDisplayTypeXiaomi").val();
  var Size= $("#addDisplaySizeXiaomi").val();
  var Resolution= $("#addResolutionXiaomi").val();
  var Os = $("#addOsXiaomi").val();
  var Chipset= $("#addChipsetXiaomi").val();
  var Cpu= $("#addCPUXiaomi").val();
  var FrontCamera= $("#addSelfieCameraXiaomi").val();
  var Gpu= $("#addGPUXiaomi").val();
  var CardSlot= $("#addCardSlotXiaomi").val();
  var Internal= $("#addInternalStorageXiaomi").val();
  var Camera= $("#addMainCameraXiaomi").val();
  var Sound= $("#addSoundsXiaomi").val();
  var Comms= $("#addCommsXiaomi").val();
  var Features= $("#addSensorFeaturesXiaomi").val();
  var Battery= $("#addBatteryXiaomi").val();
  var Colors= $("#addColorsXiaomi").val();
  var mcamFeatures= $("#addMainCameraFeaturesXiaomi").val();
  var mcamVideo= $("#addMainCameraVideoXiaomi").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesXiaomi").val();
  var ScamVideo= $("#addSelfieCameraVideoXiaomi").val();
  var Bluetooth= $("#addBluetoothXiaomi").val();
  var NFC= $("#addNFCXiaomi").val();
  var Radio= $("#addRadioXiaomi").val();
  var GPS= $("#addGPSXiaomi").val();
  var Charging= $("#addChargingXiaomi").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/Xiaomi",
          method:"POST",
          data:{ name, Price,picture,Xiaomilogy,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadXiaomi() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/Xiaomi",
    method: "GET",
    success: function(response) {
      var phones = $("#Xiaomi");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDXiaomi(iddd);

});
    }
  });
}
function loadonIDXiaomi(id)
  {
    if(isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Xiaomi/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Xiaomi");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneXiaomi ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteXiaomi'>delete</button><button class='btn btn-warning btn-sm float-right editXiaomi'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Xiaomilogy</td><td>"+response.Xiaomilogy+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
    if(!isloggedin)
    {
      $.ajax({
        url: "https://abeertech-serverside.herokuapp.com/api/Xiaomi/"+id,
        method: "GET",
        success: function(response) {
          var phones = $("#Xiaomi");
          phones.empty();
          console.log(response._id);
          phones.append(
            "<div class='PicturesPhoneXiaomi ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>Xiaomilogy</td><td>"+response.Xiaomilogy+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
          );     
    }
  });
    }
  }
  
function handleDeleteXiaomi() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneXiaomi  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/Xiaomi/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadXiaomi();
      }
    });
}
function addRecordZTE()
{
  var name = $("#addnameZTE").val();
  var Price = $("#addPriceZTE").val();
  var picture= $("#addPictureZTE").val();
  var ZTElogy= $("#addZTElogyZTE").val();
  var Announced= $("#addAnnouncedZTE").val();
  var Dimension= $("#addDimensionZTE").val();
  var Weight= $("#addWeightZTE").val();
  var Build= $("#addBuildZTE").val();
  var Sim= $("#addSimZTE").val();
  var Type= $("#addDisplayTypeZTE").val();
  var Size= $("#addDisplaySizeZTE").val();
  var Resolution= $("#addResolutionZTE").val();
  var Os = $("#addOsZTE").val();
  var Chipset= $("#addChipsetZTE").val();
  var Cpu= $("#addCPUZTE").val();
  var FrontCamera= $("#addSelfieCameraZTE").val();
  var Gpu= $("#addGPUZTE").val();
  var CardSlot= $("#addCardSlotZTE").val();
  var Internal= $("#addInternalStorageZTE").val();
  var Camera= $("#addMainCameraZTE").val();
  var Sound= $("#addSoundsZTE").val();
  var Comms= $("#addCommsZTE").val();
  var Features= $("#addSensorFeaturesZTE").val();
  var Battery= $("#addBatteryZTE").val();
  var Colors= $("#addColorsZTE").val();
  var mcamFeatures= $("#addMainCameraFeaturesZTE").val();
  var mcamVideo= $("#addMainCameraVideoZTE").val();
  var ScamFeatures= $("#addSelfieCameraFeaturesZTE").val();
  var ScamVideo= $("#addSelfieCameraVideoZTE").val();
  var Bluetooth= $("#addBluetoothZTE").val();
  var NFC= $("#addNFCZTE").val();
  var Radio= $("#addRadioZTE").val();
  var GPS= $("#addGPSZTE").val();
  var Charging= $("#addChargingZTE").val();
  $.ajax({
          url:"https://abeertech-serverside.herokuapp.com/api/ZTE",
          method:"POST",
          data:{ name, Price,picture,ZTElogy,Announced,Dimension,Weight,Build,Sim,Type,Size,Resolution,Os,Chipset,Cpu,Gpu,FrontCamera,CardSlot,Internal,Camera,Sound,Comms,Features,Battery,Colors,mcamFeatures,mcamVideo,ScamFeatures,ScamVideo,Bluetooth,NFC,Radio,GPS,Charging },
          success:function(){
           $( "div.addrecord" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
            
          }
  });

}
function loadZTE() {
  $.ajax({
    url: "https://abeertech-serverside.herokuapp.com/api/ZTE",
    method: "GET",
    success: function(response) {
      var phones = $("#ZTE");
      phones.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        
      phones.append(
          "<div class='card' data-id="+rec._id+"><img class='card-img-top' src="+rec.picture+"> <a class='gosomewhere'>"+rec.name+"</a> </div></div>"
        ); 
      }
      $('.gosomewhere').click(function()
      {
        var iddd=$(this).closest('.card').attr('data-id');
        loadonIDZTE(iddd);

});
    }
  });
}
function loadonIDZTE(id)
  {
    if(isloggedin)
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/ZTE/"+id,
      method: "GET",
      success: function(response) {
        var phones = $("#ZTE");
        phones.empty();
        phones.append(
          "<div class='PicturesPhoneZTE ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><button  class='btn btn-danger btn-sm float-right deleteZTE'>delete</button><button class='btn btn-warning btn-sm float-right editZTE'>Edit</button><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>ZTElogy</td><td>"+response.ZTElogy+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
if(!isloggedin)
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/ZTE/"+id,
      method: "GET",
      success: function(response) {
        var phones = $("#ZTE");
        phones.empty();
        phones.append(
          "<div class='PicturesPhoneZTE ' data-id="+response._id+"><h3>"+response.name+"</h3><img src="+response.picture+"><h5>Price:"+response.Price+"</h5><table class='table-bordered'><tbody><tr><th>Network</th><td id='idwidth'>ZTElogy</td><td>"+response.ZTElogy+"</td></tr><tr><th>Lanuch</th><td id='idwidth'>Announced</td><td>"+response.Announced+"</td></tr><tr><th>Body</th><td id='idwidth'>Dimension</td><td>"+response.Dimension+"</td></tr><tr><th></th><td id='idwidth'>Weight</td><td>"+response.Weight+"</td></tr><tr><th></th><td id='idwidth'>Build</td><td>"+response.Build+"</td></tr><tr><th></th><td id='idwidth'>Sim</td><td>"+response.Sim+"</td></tr><tr><th>Display</th><td id='idwidth'>Type</td><td>"+response.Type+"</td></tr><tr><th></th><td id='idwidth'>Size</td><td>"+response.Size+"</td></tr><tr><th></th><td id='idwidth'>Resolution</td><td>"+response.Resolution+"</td></tr><tr><th>Platform</th><td id='idwidth'>Os</td><td>"+response.Os+"</td></tr><tr><th></th><td id='idwidth'>Chipset</td><td>"+response.Chipset+"</td></tr><tr><th></th><td id='idwidth'>Cpu</td><td>"+response.Cpu+"</td></tr><tr><th></th><td id='idwidth'>Gpu</td><td>"+response.Gpu+"</td></tr><tr><th>Memory</th><td id='idwidth'>CardSlot</td><td>"+response.CardSlot+"</td></tr><tr><th></th><td id='idwidth'>Internal</td><td>"+response.Internal  +"</td></tr><tr><th>Main Camera</th><td id='idwidth'>Camera</td><td>"+response.Camera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.mcamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.mcamVideo+"</td></tr><tr><th>Selfie Camera</th><td id='idwidth'>Front Camera</td><td>"+response.FrontCamera+"</td></tr><tr><th></th><td id='idwidth'>Features</td><td>"+response.ScamFeatures+"</td></tr><tr><th></th><td id='idwidth'>Video</td><td>"+response.ScamVideo+"</td></tr><tr><th>Sound System</th><td id='idwidth'>Sound</td><td>"+response.Sound+"</td></tr><tr><th>Comms</th><td id='idwidth'>WLAN</td><td>"+response.Comms+"</td></tr><tr><tr><th></th><td id='idwidth'>Bluetooth</td><td>"+response.Bluetooth+"</td></tr><tr><th></th><td id='idwidth'>GPS</td><td>"+response.GPS+"</td></tr><tr><th></th><td id='idwidth'>NFC</td><td>"+response.NFC+"</td></tr><tr><th></th><td id='idwidth'>Radio</td><td>"+response.Radio+"</td></tr><th>Features</th><td id='idwidth'>Sensors</td><td>"+response.Features+"</td></tr><tr><th>Battery</th><td id='idwidth'>Type</td><td>"+response.Battery+"</td></tr><tr><th></th><td id='idwidth'>Charging</td><td>"+response.Charging+"</td></tr><tr><th></th><td id='idwidth'>Colors</td><td>"+response.Colors+"</td></tr></tbody></table></div></div>"
        );     
  }
});
  }
  
function handleDeleteZTE() {
    var btn = $(this);
    var parentDiv = btn.closest(".PicturesPhoneZTE  ");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://abeertech-serverside.herokuapp.com/api/ZTE/" + id,
      method: "DELETE",
      success: function() {
        $( "div.delete" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        loadZTE();
      }
    });
}
