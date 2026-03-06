import { useLanguageStore } from '../store/useLanguageStore';

const { t } = useLanguageStore.getState();

interface contactType {
  course_name: string,
  course: string,
  year: number,
  is_ongoing?: boolean,
}

export const courseInfo: contactType[] = [
  {
    course_name: 'Trybe',
    course: t('courses.trybe_name'),
    year: 2023,
  },

  {
    course_name: 'UNIFACVEST University Center',
    course: t('courses.unifacvest_course'),
    year: 2024,
    is_ongoing: true,
  },
];