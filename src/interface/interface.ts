export interface DeviceInfo {
    memUsed?: number;
    diskFree?: number;
    diskTotal?: number;
    model?: string;
    osVersion?: string;
    appVersion?: string;
    appBuild?: string;
    platform?: string;
    manufacturer?: string;
    uuid?: string;
    batteryLevel?: number;
    isCharging?: boolean;
    isVirtual?: boolean;
}

export interface VideoLink {
    linkname?: string[];
}

export interface LoadingControllerOption {
    type?: number;
    position?: string;
    message?: string;
    showMessage?: boolean;
    overlay?: boolean;
}

export interface LatLng {
    lat: string | number;
    lng: string | number;
}

export interface Country {
    name?: string;
    iso2?: string;
    dialCode?: string | number;
    priority?: number;
    areaCodes?: string[] | number[];
    countryCode?: string;
    nativeName?: string;
    latLng?: LatLng;
    latLngString?: string;
}

export interface UserData {
    id?: number;
    name?: string;
    photo?: string;
    country_code?: string;
    dial_code?: string;
    phone?: number;
    email?: string;
    password?: string;
    user_level?: number;
    created_at?: Date;
}

export interface Avatar {
    name: string,
    path: string,
    filePath: string,
}

export interface Video {
    id?: number;
    title_in_french?: string;
    title_in_english?: string;
    description_in_french?: string;
    description_in_english?: string;
    duration: string;
    category_id?: number;
    thumbnail_link?: string;
    file_link?: string;
    likes?: number;
}

export interface CalendarDay {
    day?: number;
    weekday?: number;
    enable?: number;
    upcoming?: number;
    selected?: number;
    week?: number;
}

export interface Time {
    hour?: number;
    minute?: number;
    flag?: number;
}

export interface Calendar {
    year?: number;
    month?: number;
    over_past?: number;
    today?: CalendarDay;
    days?: CalendarDay[];
}

export interface Position {
    posX?: number;
    posY?: number;
}

export interface Size {
    width?: number;
    height?: number;
}

export interface Rect {
    position?: Position;
    size?: Size;
}

export interface CanvasRect {
    width?: number;
    height?: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    x?: number;
    y?: number;
}

export interface CoachingSession {
    id?: number;
    user_id?: number;
    cs_datetime?: number;
    cs_status?: number;
    coach_user?: number;
    coach_user_name?: string;
    coach_user_photo?: string;
    coach_user_phone?: string;
    time_left?: string;
    can_activate?: boolean;
}

export interface UserProfile {
    cs_datetime?: number;
    cs_status?: number;
    name?: string;
    photo?: string;
    dial_code?: number;
    phone?: string;
}

export interface CoachingQuestion {
    id?: string;
    question_in_french?: string;
    question_in_english?: string;
    answer_in_french?: string;
    answer_in_english?: string;
    question_id?: string;
    order_number?: string;
}

export interface LessonQuiz {
    id?: string;
    question_in_french?: string;
    question_in_english?: string;
    answer_in_french?: string;
    answer_in_english?: string;
    question_id?: string;
    order_number?: string;
    checkbox?: any;
}

export interface CoachingReview {
    id?: number;
    user_id?: number;
    user_name?: string;
    user_photo?: string;
    review_content?: string;
    review_rating?: number;
    review_status?: number;
    review_datetime?: string;
}

export interface MindfulCategory {
    id?: number;
    category_thumbnail?: string;
    category_name_in_english?: string;
    category_name_in_french?: string;
}

export interface Mindfulness {
    category_id?: number;
    image_url?: string;
    sound_link?: string;
}

export interface SurveyQuestion {
    id?: number;
    in_french?: string;
    in_english?: string;
    order_number?: number;
}

export interface LastQuestion {
    question?: string;
    answers?: string[];
}

export interface Score {
    score?: number;
    date?: string;
}

export interface UserPreSetting {
    id?: number;
    user_id?: number;
    video_id1?: number;
    video_id2?: number;
    video_id3?: number;
    notification?: number;
    visible?: boolean;
    created_date?: Date;
}
