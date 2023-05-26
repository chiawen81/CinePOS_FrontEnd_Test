/**
 * CinePOS_BackEnd
 * CinePOS 後端API
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ScheduleItem } from './scheduleItem';

export interface ScheduleListResData {
    forEach(arg0: (currentItem: any) => void): unknown;
    /**
     * 電影ID
     */
    movieId: string;
    /**
     * 電影名稱
     */
    title: string;
    /**
     * 電影主視覺海報
     */
    posterUrl: string;
    /**
     * 電影級別(0:普通級、6:保護級、12:輔導十二級、15 :輔導十五級、18:限制級)
     */
    rate: number;
    /**
     * 電影時長（以分鐘為單位）
     */
    runtime: number;
    scheduleList: ScheduleItem;
}
