import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { SeoFields } from '@src/components/atoms/seo';
import { Container } from '@src/components/atoms/container';
import { contentfulClient } from '@src/helpers/client';
import { revalidateDuration } from '@src/pages/utils/constants';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { page } = props;
  const { t } = useTranslation();

  return (
    <>
      {/* {page.seoFields && <SeoFields {...page.seoFields} />} */}
      <Container className="my-8  md:mb-10 lg:mb-16">
        <h2 className="mb-4 md:mb-6">SAMPLE TITLE</h2>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const res = await contentfulClient.getEntries({
      content_type: 'pageLanding',
    });
    const page = res.items[0];

    if (!page) {
      return {
        revalidate: revalidateDuration,
        notFound: true,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        page,
      },
    };
  } catch (e) {
    console.log('error: ', e);
    return {
      revalidate: revalidateDuration,
      notFound: true,
    };
  }
};

export default Page;
