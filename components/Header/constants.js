import Dropdown from './Dropdown';
import DropdownButton from '../ButtonDropdown';
/* Icons for Topics  */
import Pencil from 'public/icons/topics/pencil.svg';
import Balloon from 'public/icons/topics/balloon.svg';
import Ruler from 'public/icons/topics/ruler.svg';
import TestGlass from 'public/icons/topics/test-glass.svg';
import NoteEarth from 'public/icons/topics/note-earth.svg';
import PcMonitor from 'public/icons/topics/pc-monitor.svg';
/* Icons for Create */
import Workset from 'public/icons/create/workset.svg';
import Folder from 'public/icons/create/folder.svg';
import Class from 'public/icons/create/class.svg';
import { IoMdAdd } from 'react-icons/io';

import classNames from 'classnames/bind';
import headerStyles from './Header.module.scss';

export const cx = classNames.bind(headerStyles);





export const dropdownTopics = [
    {
        icon: <Pencil />,
        text: "Güzel sanatlar ve insani bilimler",
        links: [
            { text: 'Tarih', href: '/' },
            { text: 'İngilizce', href: '/' },
            { text: 'Felsefe', href: '/' },
            { text: 'Görsel Sanatlar', href: '/' },
            { text: 'Müzik', href: '/' },
            { text: 'Tümünü Gör', href: '/', addClass: 'primaryColorLink' },
        ]
    },
    {
        icon: <Balloon />,
        text: "Diller",
        links: [
            { text: 'İspanyolca', href: '/' },
            { text: 'İngilizce', href: '/' },
            { text: 'İngilizce', href: '/' },
            { text: 'Almanca', href: '/' },
            { text: 'Latince', href: '/' },
            { text: 'Tümünü gör', href: '/', addClass: 'primaryColorLink' }
        ]
    },
    {
        icon: <Ruler />,
        text: "Matematik",
        links: [
            { text: 'Aritmetik', href: '/' },
            { text: 'Geometri', href: '/' },
            { text: 'Cebir', href: '/' },
            { text: 'Uygulamalı matematik', href: '/' },
            { text: 'İstatistik', href: '/' },
            { text: 'Tümünü gör', href: '/', addClass: 'primaryColorLink' },
        ]
    },
    {
        icon: <TestGlass />,
        text: "Fen Bilimleri",
        links: [
            { text: 'Biyoloji', href: '/' },
            { text: 'Tıp Yerbilim', href: '/' },
            { text: 'Kimya', href: '/' },
            { text: 'Mühendislik', href: '/' },
            { text: 'Tümünü gör', href: '/', addClass: 'primaryColorLink' },
        ]
    },
    {
        icon: <NoteEarth />,
        text: "Sosyal Bilimler",
        links: [
            { text: 'Ekonomi', href: '/' },
            { text: 'Psikoloji', href: '/' },
            { text: 'Siyaset Bilimi', href: '/' },
            { text: 'Sosyoloji', href: '/' },
            { text: 'Ticaret', href: '/' },
            { text: 'Tümünü gör', href: '/', addClass: 'primaryColorLink' },
        ]
    },
    {
        icon: <PcMonitor />,
        text: "Diğer",
        links: [
            { text: 'Bilgisayar becerileri', href: '/' },
            { text: 'Hobiler', href: '/' },
            { text: 'Spor', href: '/' },
            { text: 'Tümünü gör', href: '/', addClass: 'primaryColorLink' },
        ]
    },
]



const dropdownCreate = [
    {
        icon: <Workset />,
        text: "Çalışma Seti",
        href: '/'
    },
    {
        icon: <Folder />,
        text: "Klasör",
        href: '/'
    },
    {
        icon: <Class />,
        text: "Sınıf",
        href: '/'
    }
]

export const NavigationItems = [
    {
        text: 'Giriş sayfası',
        href: '/',
        design: 'hide-lt-md'
    },
    <DropdownButton
        text="Konular"
        design={['hide-lt-md-quizlet', 'order-lt-md-4']}
        dropdownElement={<Dropdown dropdownItems={dropdownTopics} />}
    />,
    {
        text: 'Çözümler',
        design: 'hide-lt-md-quizlet',
        href: '/'
    },
    <DropdownButton
        icons={({ cx }) => {
            return <IoMdAdd className={cx('hide-gt-md') + ' add-icon'} color="white" size={22} />
        }}
        text="Oluştur"
        design={['btn-primary', 'create-btn']}
        textDesign='hide-lt-md'
        dropdownIconDesign='hide-lt-md'
        dropdownIconArrowSize={30}
        dropdownElement={<Dropdown   dropdownItems={dropdownCreate} />}
    />
]

