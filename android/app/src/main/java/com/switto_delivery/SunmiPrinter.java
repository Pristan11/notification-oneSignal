package com.switto_delivery;


import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.switto_delivery.utils.BluetoothUtil;
import com.switto_delivery.utils.SunmiPrintHelper;

public class SunmiPrinter extends ReactContextBaseJavaModule {
    public SunmiPrinter (@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "swittoRestaurantBillPrinter";
    }

    @ReactMethod
    public void onPrintBill(String content) {
        try{
            Boolean isBold = true;
            Boolean isUnderLine = true;
            Float size = 3.212345f ;
            String testFont = "switto restaurant printer testing";

            if (!BluetoothUtil.isBlueToothPrinter) {
                SunmiPrintHelper.getInstance().printText(content, size, isBold, isUnderLine, testFont);
                SunmiPrintHelper.getInstance().feedPaper();
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}