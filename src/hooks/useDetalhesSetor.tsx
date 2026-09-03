import {useEffect, useState} from "react";
import {ItemSetor} from "../@types/setor";
import {getQntPorSetor} from "../services/setor_service";
import * as XLSX from "xlsx";
import {File, Paths} from "expo-file-system";
import * as Sharing from "expo-sharing";

export default function useDetalhesSetor() {

    const [itensSetor, setitensSetor] = useState<ItemSetor[]>([]);
    const [itensFiltrados, setItensFiltrados] = useState<ItemSetor[]>([]);

    function fetchItensFiltrados(busca?: string) {
        const data = itensSetor.filter(value => value.nome_item.toLowerCase().toString().includes(busca?.toLowerCase() ?? ""));

        setItensFiltrados(data);
    }

    async function getItensPorSetor(id: string) {
        try {
            const data = await getQntPorSetor(id);
            setitensSetor(data);
            setItensFiltrados(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getItensPorSetor("2");
    }, [])

    async function exportarExcel(lista: any) {
        try {
            const worksheet = XLSX.utils.json_to_sheet(lista);

            const workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(workbook, worksheet, "Patrimônios");

            const base64 = XLSX.write(workbook, {
                type: "base64",
                bookType: "xlsx",
            });

            const file = new File(Paths.cache, "patrimônios.xlsx");

            file.create({
                overwrite: true,
            });

            file.write(base64, {
                encoding: "base64",
            });

            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(file.uri, {
                    mimeType:
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    dialogTitle: "Exportar patrimônios",
                    UTI:
                        "com.microsoft.excel.xlsx",
                });
            }
        } catch (error) {
            console.error("Erro ao exportar Excel:", error);
        }
    }

    return {
        itensSetor,
        itensFiltrados,
        fetchItensFiltrados,
        exportarExcel
    }
}