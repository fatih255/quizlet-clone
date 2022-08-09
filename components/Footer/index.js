import React from 'react';
import Columns from './Columns';
import cx from './cx';
import SelectLanguages from '../SelectLanguages';
import QuizletIcon from 'icons';
import Link from 'next/link';



const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className={cx('flex-container')}>
                <Columns
                    items={
                        [{
                            head: 'Konular',
                            links: [
                                {
                                    text: 'Diller',
                                    href: '/Diller'
                                },
                                {
                                    text: 'Diğer',
                                    href: '/Diger'
                                },
                                {
                                    text: 'Fen bilimleri',
                                    href: '/fen-bilimleri'
                                },
                                {
                                    text: 'Güzel sanatlar ve insani bilimler',
                                    href: '/guzel-sanatlar-ve-insani-bilimler'
                                },
                                {
                                    text: 'Matematik',
                                    href: '/matematik'
                                },
                                {
                                    text: 'Sosyal Bilimler',
                                    href: '/sosyal-bilimler'
                                },
                            ]
                        },
                        {
                            head: 'Özellikler',
                            links: [
                                {
                                    text: 'Quizlet Live',
                                    href: '/quizlet-live'
                                },
                                {
                                    text: 'Quizlet Değerlendirme',
                                    href: '/quizlet-degerlendirme'
                                },
                                {
                                    text: 'Uzman onaylı çözümler',
                                    href: '/uzman-onayli-cozumler'
                                },
                                {
                                    text: 'Kartlar',
                                    href: 'kartlar'
                                },
                                {
                                    text: 'Mobil',
                                    href: '/mobil'
                                },
                                {
                                    text: 'Quizlet Plus',
                                    href: '/quizlet-plus'
                                },
                                {
                                    text: 'Öğretmenler İçin Quizlet Plus',
                                    href: '/ogretmenler-icin-quizlet-plus'
                                }
                            ]
                        },
                        {
                            head: 'Destek',
                            links: [
                                {
                                    text: 'Üye olun',
                                    href: '/uye-olun'
                                },
                                {
                                    text: 'Destek Merkezi',
                                    href: 'destek-merkezi'
                                },
                                {
                                    text: 'Sorumluluk İlkesi',
                                    href: '/sorumluluk-ilkesi'
                                },
                                {
                                    text: 'Topluluk Kuralları',
                                    href: '/topluluk-kurallari'
                                },
                                {
                                    text: 'Öğretmenler',
                                    href: '/ogretmenler'
                                }
                            ]
                        },
                        {
                            head: 'Hakkımızda',
                            links: [
                                {
                                    text: 'Şirket',
                                    href: '/sirket'
                                },
                                {
                                    text: 'Blog',
                                    href: '/blog'
                                },
                                {
                                    text: 'Basın',
                                    href: '/basin'
                                },
                                {
                                    text: 'Kariyer',
                                    href: '/kariyer'
                                },
                                {
                                    text: 'Reklam ver',
                                    href: '/reklam-ver'
                                },
                                {
                                    text: 'Gizlilik',
                                    href: '/gizlilik',
                                    icon: <QuizletIcon name="shield" />
                                },
                                {
                                    text: 'Reklam ve çerez politikası',
                                    href: '/reklam-ve-cerez-politikasi'
                                },
                                {
                                    text: 'Kullanım koşulları',
                                    href: '/kullanım-kosullari'
                                }
                            ],
                        },
                        {
                            head: 'Dil',
                            Component: <SelectLanguages />
                        }
                        ]}
                />
            </div>
            <div className={cx('bottom')}>
                <div>
                    <div className={cx('social-container')}>
                        <Link href="#">
                            <a>
                                <QuizletIcon name="twitter" />
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <QuizletIcon name="facebook" />
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <QuizletIcon name="instagram" />
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <QuizletIcon name="youtube" />
                            </a>
                        </Link>
                    </div>
                    <div className={cx('site-copyright')}>
                        © 2022 Quizlet Inc.
                    </div>
                </div>
                <div>
                    <img src="images/coppa-seal.png" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
