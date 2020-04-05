gdjs.IntroCode = {};
gdjs.IntroCode.GDIntroObjects1= [];
gdjs.IntroCode.GDIntroObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


}; //End of gdjs.IntroCode.eventsList0x5b6e18


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;

gdjs.IntroCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
