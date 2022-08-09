import React from 'react';
import styles from './SelectLanguages.module.scss';
import classNames from 'classnames/bind';
import DownArrow from 'public/icons/common/down-arrow.svg';
const SelectLanguages = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('select-languages')}>
            <select title="Dil Seçimi">
                <option  value="de">Deutsch</option>
                <option value="en-gb">English (UK)</option>
                <option value="en-us">English (USA)</option>
                <option value="es">Español</option>
                <option value="fr-fr">Français (FR)</option>
                <option value="fr-ca">Français (QC/CA)</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="nl">Nederlands</option>
                <option value="pl">polski</option>
                <option value="pt-br">Português (BR)</option>
                <option value="ru">Русский</option>
                <option defaultValue="tr">Türkçe</option>
                <option value="uk">Українська</option>
                <option value="vi">Tiếng Việt</option>
                <option value="ko">한국어</option>
                <option value="zh-cn">中文 (简体)</option>
                <option value="zh-tw">中文 (繁體)</option>
                <option value="ja">日本語</option>
            </select>
            <DownArrow color="black" />
        </div>
    );
}

export default SelectLanguages;
