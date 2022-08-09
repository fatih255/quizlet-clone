import Button from 'components/Button'
import styles from 'styles/page/Home.module.scss';
import FlashCardImage from 'components/FlashCardImage';
import TestimonialSlider from 'components/TestimonialSlider';
import HighlightButton from 'components/HighlightButton';
import { cxBind } from 'utils/ui';



export default function Home() {

  const cx = cxBind(styles);
  return (
    <>
      {/* slider section */}
      <section className={cx('slider')}>
        <div className={cx('container')}>
          <img className={cx('bg-image')} src="images/slidercontainer.jpg" />
          <div className={cx('overlay')} />
          <div className={cx('slider-ui')}>
            <div className={cx('slider-text-area')}>
              <h2>Artık sizi hiç kimse durduramaz</h2>
              <p>İstediğiniz konuda uzman olabilirsiniz</p>
            </div>
            <Button text="Başla" design="btn-primary" />
          </div>
        </div>
      </section>
      <div className="main-container">
        {/* highlight section */}
        <section className={cx('highlight-text')}>
          <h2>Quizlet'i kullanan öğrencilerin <em>%90'ı</em> daha yüksek notlar alıyor.</h2>
        </section>

        {/* image flashcards section */}
        <section>
          <FlashCardImage
            title="Siz herkesin ilgisini çektikten sonra geri kalanı bize bırakın."
            text="İngilizce öğrenmenizi sağlayacak kartlardan tarihi anlamanızı kolaylaştıran oyunlara kadar istediğiniz zorlukların üstesinden gelmek için çeşitli araçlar kullanabilirsiniz."
            image="/images/flashcard1.avif"
            imagePosition="right"
            design="mt-0"
          />
          <FlashCardImage
            title="Bir sonraki başarınıza çok az kaldı."
            text="Öğrendiğiniz her yeni bilgi bir başarıdır. Quizlet, konuları ve alanları ayırdığından her adımda yeni bir şey başarmış olursunuz."
            image="/images/flashcard2.avif"
            imagePosition="left"
          />
          <FlashCardImage
            title="Endişelenmeyin. Yapmanız gerekeni yapın."
            text="Başarı duygusunu tattıktan sonra devam etmeniz kolay olur."
            image="/images/flashcard3.avif"
            imagePosition="right"
          />
        </section>
        {/* testimonial slider section */}
        <section>
          <TestimonialSlider
            items={[
              {
                content: "Quizlet, çalışmanın ne kadar eğlenceli ve önemli olabileceğini anlamamı sağladı! Bu yıl, okuldaki kimya dersindeki terimleri Quizlet'e ekledim ve yakındaki sınavım için şimdiden kendimi rahat hissediyorum.",
                person: "LITTLEBUTTERCUP, 17"
              },
              {
                content: "Quizlet, çalışmanın harika bir yöntemi. Arkadaşlarıma da bahsettim ve hepimiz giderek daha iyi oluyoruz. Quizlet aklıma her geldiğinde saatlere çalışmak yerine birkaç dakika çalışmanın bana verdiği zevki hatırlıyorum.",
                person: "AGENTDOLLY, 29"
              },
              {
                content: "Quizlet, notlarımı iyileştirmeme çok yardımcı oldu. Çalışmayı eğlenceli ve verimli hale getirdiğiniz için teşekkür ederim!",
                person: "NICOLEB18, 19"
              },
              {
                content: "Çalışmak benim için çok zordu. Şu anda yeni bir üniversiteye gidiyorum ve burada Quizlet'le tanıştım. Ders çalışırken artık strese girmiyorum. TEŞEKKÜR EDERİM, QUIZLET!",
                person: "SIERRAFR, 20"
              }
            ]}
          />
        </section>
        {/* Are you ready section */}
        <section className={cx('areyouready')}>
          <h3>Daha iyi notlar almaya hazır mısınız?</h3>
          <Button
            link="home" text="Çalışmaya başlayalım"
            design={['btn-primary', 'extra-padding', 'rounded-md']}
          />
        </section>
      </div>
      {/* Supports students section */}
      <section className={cx('bg-color-fog')}>
        <FlashCardImage
          title="Öğrencilerinize destek verin"
          subtitle="Öğretmenler"
          text="Başarmak istedikleri ne olursa olsun her öğrencinin ilgilendiği konuyu kendine güvenerek öğrenmesini sağlayabilirsiniz. Quizlet'in ücretsiz çalışma setlerini, çalışma modlarını ve sınıf oyunlarını kullanarak öğrencilerinizi kolaylıkla motive edebilirsiniz."
          image="/images/support-teacher.png"
          imagePosition="right"
          design="mobile-margin-image"
          button={<HighlightButton
            text="Quizlet'i sınıfınıza taşıyın"
            type='link'
            href="/"
          />
          }
        />
      </section>
      <section className="center col">
        <h3 className="text-center">Her yerde öğrenebilirsiniz</h3>
        <div className="flex gap-1 col-xs">
          <a href="https://itunes.apple.com/us/app/quizlet-flashcards-study-tools/id546473125?mt=8">
            <img className="playstoreimage" src="images/apple_tr.png" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid&hl=en&referrer=utm_source%3D">
            <img className="playstoreimage" src="images/google_play_tr.png" />
          </a>
        </div>
      </section>
    </>
  )
}
