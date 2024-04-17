import { BsWhatsapp } from 'react-icons/bs';
import { FaChartLine } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { TbRefresh } from "react-icons/tb";
import { GiChampions } from "react-icons/gi";
import { IoInformationCircle } from "react-icons/io5";

export const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-map">
      <div className="bg-black">
        <h1 className="text-4xl text-center font-bold 2xl:text-6xl xl:text-6xl lg:text-6xl mt-10
         text-green-300 p-4 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-4/5">
          Landing pages personalizadas para seu negócio!
        </h1>

        <div className="2xl:my-20 xl:my-20 lg:my-20 my-12">
          <div className="mx-auto 2xl:mb-20 xl:mb-20 lg:mb-20 mb-12 w-2/3">
            <h2
              className="text-xl text-center font-bold 2xl:text-3xl xl:text-3xl lg:text-2xl
           text-white mb-4 bg-orange-500 px-2 py-4  uppercase"
            >
              O que é uma Landing Page?
            </h2>

            <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl text-white">
              Uma landing page tem como principal objetivo a conversão de leads,
              ou seja, fazer com que o visitante se torne um cliente, passando
              para a próxima etapa do funil de vendas Elas também são conhecidas
              como páginas de aterrissagem, páginas de conversão, de captura ou
              de destino
            </p>
          </div>

          <div className="w-full p-6">
            <div>
              <h2
                className="text-xl text-center font-bold 2xl:text-2xl xl:text-4xl lg:text-2xl 
            mb-8 text-orange-500 uppercase w-4/5 m-auto"
              >
                Principais vantagens de uma Landing Page
              </h2>
            </div>

            <div
              className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 m-auto
              border-4 border-gray-400 p-6"
            >
              <h2
                className="text-lg text-center 2xl:text-2xl xl:text-3xl lg:text-2xl 
            mb-8 text-green-300 px-12 flex justify-center items-center gap-4 uppercase"
              >
                Gerar Leads <IoIosPeople size={62} />
              </h2>

              <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mb-8 text-white border-4 p-4">
                Uma landing page pode ser usada para coletar informações de
                contato de possíveis clientes<br></br>
                (prospects), como nome, endereço de e-mail e número de telefone.
                <br></br>
                Isso pode ajudar a empresa a criar uma lista de leads
                qualificados que<br></br>
                podem ser contatados no futuro.
              </p>

              <h2
                className="text-xl text-center 2xl:text-2xl xl:text-3xl lg:text-2xl 
              mb-8 text-green-300 px-12 flex justify-center items-center gap-4"
              >
                Impulsionar as vendas
                <FaChartLine size={62} />
              </h2>

              <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mb-8 text-white border-4 p-4">
                Se a empresa estiver vendendo um produto ou serviço,<br></br>
                uma landing page pode servir para promover e oferecer aos
                visitantes uma opção de compra.<br></br>É uma forma de engajar e
                aumentar as vendas.
              </p>

              <h2
                className="text-xl text-center 2xl:text-2xl xl:text-3xl lg:text-2xl 
              mb-8 text-green-300 px-12 flex justify-center items-center gap-4"
              >
                Melhorar a conversão
                <TbRefresh size={62}/>
              </h2>

              <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mb-8 text-white  border-4 p-4">
                Uma landing page bem projetada pode aumentar a taxa de conversão
                de visitantes<br></br>
                em clientes ou leads. Dessa forma, a empresa maximiza o retorno
                sobre o investimento<br></br>
                em marketing. É possível usar e segmentar esses leads e planejar
                campanhas<br></br>
                futuras de acordo com cada perfil de cliente.{' '}
              </p>
              <h2
                className="text-xl text-center 2xl:text-2xl xl:text-3xl lg:text-2xl 
              mb-8 text-green-300 px-12 flex justify-center items-center gap-4"
              >
                Medir o sucesso
                <GiChampions size={62}/>
              </h2>

              <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mb-8 text-white border-4 p-4">
                As métricas de uma landing page, como número de visitas,
                <br></br>
                taxa de conversão e valor médio por lead, podem ajudar a medir o
                sucesso da<br></br>
                campanha e possibilitar ajustes para melhorar os resultados.
              </p>

              <h2
                className="text-xl text-center 2xl:text-2xl xl:text-3xl lg:text-2xl 
              mb-8 text-green-300 px-12 flex justify-center items-center gap-4"
              >
                Fornecer informação
                <IoInformationCircle size={62}/>
              </h2>

              <p className="text-xl text-center 2xl:text-2xl xl:text-2xl lg:text-2xl mb-1 text-white px-12 border-4 p-4">
                Uma landing page também pode ser usada para fornecer informações
                sobre um<br></br>
                produto ou serviço. Isso ajuda a aumentar o interesse e a
                confiança nas ofertas da empresa.<br></br>
                Uma das estratégias nesse sentido é educar clientes que não
                sabem como usar o produto,<br></br>
                por exemplo.
              </p>
            </div>
            <h2 className="text-2xl text-center 2xl:text-4xl xl:text-4xl lg:text-2xl mt-20 mb-8 text-orange-500 px-12 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-4/5 m-auto">
              Procurando uma Landing Page personalizada para seu negócio? Entre
              em contato agora mesmo
            </h2>
          </div>
        </div>
        <div>
          <a
            href="https://wa.me/5519971027173"
            target="_blank"
            className="bg-green-700 text-white py-3 px-5 flex justify-center items-center gap-3 rounded-xl mb-12"
          >
            <BsWhatsapp /> Fale conosco
          </a>
        </div>
        <footer className="text-white pb-6 text-sm mt-20">
          &copy; Copyright 2024 by Missura Networks
          <p className="text-center mb-0">CNPJ: 53.447.302/0001-79</p>
        </footer>
      </div>
    </div>
  );
};
