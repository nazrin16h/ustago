import React from 'react';
import { CheckCircle, Clock, ClipboardList, Package, Calendar } from 'lucide-react';

const HistoryModal = ({ isOpen, onClose, historyData }) => {
  if (!isOpen) return null;

  const getStatusConfig = (status) => {
    return status === "Tamamlandı" 
      ? { color: "text-emerald-600", bg: "bg-emerald-50", icon: <CheckCircle size={16} />, label: "İş bitib" }
      : { color: "text-amber-600", bg: "bg-amber-50", icon: <Clock size={16} />, label: "İcradadır" };
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      <div className="bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="text-xl font-black text-slate-900">Görülən İşlər</h3>
            <p className="text-xs text-slate-400 font-medium mt-1">Ustanın iş qrafiki</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full text-slate-500">✕</button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {historyData.length > 0 ? (
            historyData.map((item) => {
              const status = getStatusConfig(item.status);
              // Tarix aralığını formalaşdırırıq
              const dateDisplay = item.startDate === item.endDate 
                ? item.startDate 
                : `${item.startDate} - ${item.endDate}`;

              return (
                <div key={item.id} className="p-4 rounded-2xl border border-slate-100 bg-white shadow-xl hover:shadow-orange-200 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3">
                      <div className={`p-2 rounded-xl ${status.bg} ${status.color}`}>
                        <ClipboardList size={20} />
                      </div>
                      <p className="font-bold text-slate-900 text-sm mt-1">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Tarix və Status hissəsi */}
                  <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold">
                      <Calendar size={12} />
                      {dateDisplay}
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${status.bg} ${status.color}`}>
                      {status.icon}
                      {status.label}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-slate-400 py-10">Heç bir iş qeyd olunmayıb.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;