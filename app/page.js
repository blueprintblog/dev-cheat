import CardContribuete from '@/components/cards/CardContribuete';
import CardTitle from '@/components/cards/CardTitle';
import { IoLibrary } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <CardTitle
        icon={<IoLibrary className="inline-block mr-2" />}
        title={'Cheatsheets Hub'}
        subtitle={
          'Central de referências rápidas para desenvolvedores e sysadmins'
        }
      />
      <CardContribuete />
    </>
  );
}
