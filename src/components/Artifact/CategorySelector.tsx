import { ArtifactCategory, validateArtifactCategory } from '@/lib/models';
import { DiamondCube } from '@/components/DiamondCube';
import { ScrollLinkCrap } from '@/components/ScrollLinkCrap';

const isArtifactCategoryActive = (
  category: string | undefined,
  artifactCategory: ArtifactCategory
) => {
  if (!category || !validateArtifactCategory(category)) return false;

  return category === artifactCategory;
};

export function CategorySelector({
  title,
  category,
  selectingCategory,
}: {
  title: string;
  category: string | undefined;
  selectingCategory: ArtifactCategory;
}) {
  const isActive = isArtifactCategoryActive(category, selectingCategory);

  return (
    <ScrollLinkCrap
      scroll={true}
      href={
        isActive
          ? '/#categories'
          : `/?artifact-category=${selectingCategory}#categories`
      }
    >
      <DiamondCube text={title} isActive={isActive} />
    </ScrollLinkCrap>
  );
}
