export default function ExhibitionListEmpty() {
  return (
    <article className="flex h-full flex-col items-center justify-center gap-1">
      <p className="text-md font-regular leading-xs text-gray-1a">진행중인 전시회가 없습니다.</p>
      <p className="text-md font-regular leading-xs text-gray-aa">
        전시회가 등록되면 바로 보여드릴게요.
      </p>
    </article>
  );
}
