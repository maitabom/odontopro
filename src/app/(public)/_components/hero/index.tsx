import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorHero from "../../../../../public/doctor-hero.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8 pb-4 sm:pb-0">
        <div className="flex items-center justify-center">
          <article className="flex flex-2 flex-col justify-center space-y-8 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">Encontre os melhores profissionais em um único local</h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma para profissionais da saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 w-fit px-6 font-semibold">
              Encontre uma clínica
            </Button>
          </article>
          <div className="hidden lg:block">
            <Image
              width={340}
              height={400}
              src={doctorHero}
              alt="Foto ilustrativa do profissional de saúde"
              objectFit="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
