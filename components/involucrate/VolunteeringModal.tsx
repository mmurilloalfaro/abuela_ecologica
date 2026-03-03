"use client";

import { motion } from "framer-motion";

interface Props {
  option: any;
  onClose: () => void;
}

export function VolunteeringModal({ option, onClose }: Props) {
  if (!option) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-lg w-full p-8 space-y-6"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-semibold">{option.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <p className="text-gray-700">{option.description}</p>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <strong>Perfil:</strong>
            <p>{option.details.who}</p>
          </div>

          <div>
            <strong>Actividades:</strong>
            <ul className="list-disc pl-5">
              {option.details.activities.map((a: string) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Ambiente:</strong>
            <p>{option.details.environment}</p>
          </div>
        </div>

        <div className="pt-4 border-t text-sm">
          <p>
            <strong>Contacto:</strong> 6060-7894
          </p>
        </div>
      </motion.div>
    </div>
  );
}
