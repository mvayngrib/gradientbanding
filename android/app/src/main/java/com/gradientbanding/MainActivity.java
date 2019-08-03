package com.gradientbanding;

import com.facebook.react.ReactActivity;
import android.graphics.PixelFormat;
import android.view.WindowManager;
import android.util.Log;
import android.content.pm.ActivityInfo;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "gradientbanding";
    }

    @Override
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        Log.d("ColorGamut", "app properly requested the wide color gamut mode: " + (getWindow().getColorMode() == ActivityInfo.COLOR_MODE_WIDE_COLOR_GAMUT));
        Log.d("ColorGamut", "isWideColorGamut: " + getWindowManager().getDefaultDisplay().isWideColorGamut());
        Log.d("ColorGamut", "isScreenWideColorGamut: " + getResources().getConfiguration().isScreenWideColorGamut());
        // getWindow().setFormat(PixelFormat.RGBA_8888);
        // getWindow().addFlags(WindowManager.LayoutParams.FLAG_DITHER);
    }
}
