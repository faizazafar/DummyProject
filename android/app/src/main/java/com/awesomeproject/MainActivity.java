package com.awesomeproject;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
// import com.facebook.react.bridge.JSIModulePackage;
// import com.swmansion.reanimated.ReanimatedJSIModulePackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}

// @Override 
// protected JSIModulePackage getJSIModulePackage()
// { return new ReanimatedJSIModulePackage(); }


// }
