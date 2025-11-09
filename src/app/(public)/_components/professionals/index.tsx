import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import exampleImage from "../../../../../public/foto1.png";
import { ArrowRight } from "lucide-react";

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clínicas disponíveis
        </h2>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-0 overflow-hidden">
            <CardContent className="p-0">
              <div>
                <div className="relative h-52">
                  <Image
                    className="object-cover"
                    src={exampleImage}
                    alt="Foto de exemplo"
                    fill
                  />
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Clínica Central</h3>
                      <p className="text-sm text-gray-500">Rua dos Sabiás, 44 - Grajaú - Rio de Janeiro - RJ</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <Link
                    className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md text-sm md:text-base font-semibold"
                    href="/clinica/123"
                  >
                    Agendar horário
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
