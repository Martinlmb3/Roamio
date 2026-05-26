package com.roamio.api.scoring.util;

public class NormalizationUtil {

    public static double normalize(double value, double min, double max) {
        if (max == min) {
            return 100;
        }

        return 100 * (max - value) / (max - min);
    }
}
