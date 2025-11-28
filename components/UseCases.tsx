import React from 'react';
import { USE_CASES } from '../constants';
import { useTranslation } from 'react-i18next';

const UseCases: React.FC = () => {
  const { t } = useTranslation();
  const useCaseCopy = t('useCases.items', { returnObjects: true }) as { title: string; description: string }[];
  const localizedUseCases = USE_CASES.map((useCase, idx) => ({
    ...useCase,
    title: useCaseCopy?.[idx]?.title ?? useCase.title,
    description: useCaseCopy?.[idx]?.description ?? useCase.description
  }));

  return (
    <section className="py-24 px-6 bg-sand-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">
            {t('useCases.title')}
          </h2>
          <p className="text-stone-600">
            {t('useCases.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedUseCases.map((useCase) => (
            <div key={useCase.id} className="group relative overflow-hidden rounded-3xl h-80 shadow-lg cursor-pointer">
              {/* Background Image */}
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  {useCase.icon && (
                    <useCase.icon className="w-8 h-8 text-terracotta-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                  )}
                  <h3 className="text-2xl font-serif text-white mb-2">{useCase.title}</h3>
                  <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
