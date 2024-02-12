import { api } from "@/trpc/server";
import CreateStudentForm from "@/components/student/CreateStudentForm";

export default async function Home() {
  return (
    <main className="mx-6">
      <CreateStudentForm />
    </main>
  );
}
