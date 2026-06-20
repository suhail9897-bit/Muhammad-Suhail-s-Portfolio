import { Link } from "react-router-dom";
import { ArrowLeft, CircuitBoard, Download, FileJson } from "lucide-react";
import schematicProjectImage from "../../assets/schematic project/image.png";

function SchematicDetails() {
  return (
    <section className="min-h-screen bg-black px-5 pt-32 pb-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]"
        >
          <ArrowLeft size={18} />
          Back To Projects
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/[0.035] px-5 py-2">
              <CircuitBoard size={18} className="text-cyan-300" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                EDA / Digital Circuit Tool
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Schematic Circuit
              <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-indigo-300 bg-clip-text text-transparent">
                Designer
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/60">
              A digital circuit design interface where users can create
              schematic circuits, manage circuit blocks and download generated
              netlists for further EDA workflow usage.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5">
                <FileJson className="text-3xl text-cyan-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  JSON Based Flow
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Sample placeholder text for import/export workflow details.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5">
                <Download className="text-3xl text-cyan-300" />
                <h3 className="mt-4 text-xl font-black text-white">
                  Netlist Download
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Sample placeholder text for generated netlist download.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-4">
            <img
              src={schematicProjectImage}
              alt="Schematic Circuit Designer UI"
              className="h-[420px] w-full rounded-[26px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchematicDetails;