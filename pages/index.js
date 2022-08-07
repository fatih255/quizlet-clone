import Button from 'components/Button'
import styles from 'styles/page/Home.module.scss';
import classNames from 'classnames/bind';
import FlashCardImage from 'components/FlashCardImage';
import TestimonialSlider from 'components/TestimonialSlider';


export default function Home() {

  const cx = classNames.bind(styles);
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
        <TestimonialSlider />
      </section>
    </>
  )
}
