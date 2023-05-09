      import Image from 'next/image'
      import styles from './page.module.css'
      import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


      //Import JSON file here ---> It is going to have all the data for the application
      import data from "../public/data.json"

      export default function Home() {
        const {
          fields: {
            body, 
            banner: {
              fields: 
              {
                title: imgTitle,
                file: { url: imgUrl }, 
              },     
            },
            title, 
            footer,
            products
        },
        } = data;

        console.log('home  page data: ', data.fields.banner.fields.file.details.image.height);
        return (
          <main className={styles.main}>
            <div className={styles.bannerImage}>
              <Image 
                src={`https:${imgUrl}`}
                alt={imgTitle}
                fill
                />
            </div>
              <div className={styles.header}>
                <h1>{title}</h1>
                {documentToReactComponents(body)}
              </div>
              <div className={styles.phones}>
                {products.map(({ sys: { id }, fields: { 
                  description, 
                  name, 
                  imei, 
                  image: {
                  fields: 
                  {
                    title: imgTitle,
                    file: { url: imgUrl }, 
                  },     
                }, tags } }) => {
                  return (
                    <div key={id} className={styles.phone}>
                      <div className={styles.productImage}>
                        <Image 
                          src={`https:${imgUrl}`}
                          alt={imgTitle}
                          fill
                        />
                      </div>
                      <div className={styles.imei}>
                        <strong>IMEI:</strong> {imei}
                      </div>
                      <div className={styles.productName}>
                        {name}
                      </div>
                      {documentToReactComponents(description)}
                      <div className={styles.tags}>
                        {tags.map(({ sys: { id }, fields }) =>( 
                        <div key={id} className={styles.tag}>
                          {fields?.name}
                        </div>
                        ))}
                      </div>
                    </div>
                  );
                  }
                )}
              </div>
              <footer className={styles.footer}>
                <small>{footer}</small>
              </footer>
          </main>
        )
      } // -> <p>Hello world!</p>