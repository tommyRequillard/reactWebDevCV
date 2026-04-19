export type StoryChapterId = 'builder' | 'bridge' | 'vision'

export interface StoryChapter {
  id: StoryChapterId
  /** i18n key under cv.story.chapters.{id} */
  i18nKey: StoryChapterId
}

export const storyChapters: StoryChapter[] = [
  { id: 'builder', i18nKey: 'builder' },
  { id: 'bridge', i18nKey: 'bridge' },
  { id: 'vision', i18nKey: 'vision' },
]
