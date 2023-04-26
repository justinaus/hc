import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        목록 페이지
      </div>
      <Link href={'/workout/create'}>
        운동 등록
      </Link>
    </main>
  )
}
