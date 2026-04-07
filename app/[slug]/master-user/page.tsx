"use client";

import { IconPencil, IconTrash, IconPlus } from "@tabler/icons-react";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import { Button } from "@idds/react";
import TableWithAPI from "@/components/ui/TableWithAPI";

// Dummy data, ganti dengan fetch API jika sudah ada
const data = [
	{
		id: 1,
		nama: "Admin",
		email: "admin@email.com",
		role_id: 1,
		unit_id: 1,
		is_active: true,
		created_at: "2026-04-01 10:00:00",
		updated_at: "2026-04-07 09:00:00",
	},
	{
		id: 2,
		nama: "User B",
		email: "userb@email.com",
		role_id: 2,
		unit_id: 2,
		is_active: false,
		created_at: "2026-03-15 08:30:00",
		updated_at: "2026-04-06 14:20:00",
	},
];

export default function MasterUserPage() {
	return (
		<LayoutShell>
			<div className="flex items-center gap-4 mb-4">
				<PageHeader title="Master User" />
			</div>
			<div className="p-6">
				<TableWithAPI
					columns={[
						{ key: "id", label: "ID", width: 60, className: "text-center" },
						{ key: "nama", label: "Nama" },
						{ key: "email", label: "Email" },
						{ key: "role_id", label: "Role ID", width: 80, className: "text-center" },
						{ key: "unit_id", label: "Unit ID", width: 80, className: "text-center" },
						{
							key: "is_active",
							label: "Aktif",
							width: 70,
							className: "text-center",
							render: (row) => (
								<div className="flex justify-center">
									<span className={`min-w-17.5 px-2 py-1 rounded text-xs font-semibold text-center block ${row.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
										{row.is_active ? "Aktif" : "Nonaktif"}
									</span>
								</div>
							),
						},
						{ key: "created_at", label: "Dibuat", width: 140 },
						{ key: "updated_at", label: "Diubah", width: 140 },
						{
							key: "aksi",
							label: "Aksi",
							width: 90,
							className: "text-center",
							render: (row) => (
								<div className="flex items-center justify-center gap-2">
									<button title="Edit" className="text-blue-500 hover:text-blue-700 p-1 rounded">
										<IconPencil size={18} stroke={1.7} />
									</button>
									<button title="Hapus" className="text-red-500 hover:text-red-700 p-1 rounded">
										<IconTrash size={18} stroke={1.7} />
									</button>
								</div>
							),
						},
					]}
					data={data}
					showSearch
					showPagination
					pageSize={10}
					children={
						<div className="flex w-full justify-end mb-2">
							<Button
								hierarchy="primary"
								prefixIcon={<IconPlus size={16} />}
								style={{ fontSize: 14, padding: '6px 16px', borderRadius: 8 }}
							>
								Input User
							</Button>
						</div>
					}
				/>
			</div>
		</LayoutShell>
	);
}
