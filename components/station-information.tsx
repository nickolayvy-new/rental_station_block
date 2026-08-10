"use client"

import { useRef, useState } from "react"
import "./station-information.css"

type AccordionItem = {
  title: string
  description: React.ReactNode
  gallery: { src: string; alt: string; caption: React.ReactNode }[]
}

type StationFeature = {
  label: string
}

const STATION_FEATURES: StationFeature[] = [
  { label: "Возможна выдача в нерабочие часы" },
  { label: "Возврат в нерабочие часы" },
  { label: "Офис в терминале" },
  { label: "Встреча в аэропорту" },
  { label: "Трансфер до офиса" },
]

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    title: "Расположение офиса в аэропорту",
    description: (
      <>
        Наша стойка находится в <strong>Терминале C</strong>. После выхода из
        зоны багажа поверните направо и идите прямо.
      </>
    ),
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
        alt: "Выход",
        caption: "Шаг 1. Выход в зал прилета",
      },
      {
        src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400",
        alt: "Указатели",
        caption: "Шаг 2. Следуйте по указателям «Прокат авто»",
      },
      {
        src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400",
        alt: "Стойка",
        caption: "Шаг 3. Оформление договора на стойке",
      },
    ],
  },
  {
    title: "Как вернуть автомобиль?",
    description: (
      <>
        Заезжайте на многоуровневый паркинг <strong>Терминала С</strong>.
        Оставьте автомобиль на выделенных местах проката и сдайте ключи на
        стойку. Если станция закрыта, опустите ключи в оранжевый бокс.
      </>
    ),
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400",
        alt: "Паркинг",
        caption: "Шаг 1. Въезд на крытый паркинг С",
      },
      {
        src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400",
        alt: "Место",
        caption: "Шаг 2. Парковка на брендированных местах",
      },
      {
        src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400",
        alt: "Бокс",
        caption: "Шаг 3. Возврат ключей сотруднику или в бокс",
      },
    ],
  },
]

export default function StationInformation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="station-info-page">
      <div className="station-card">
        <div className="station-header">
          <div className="station-title-wrapper">
            <svg
              className="airport-road-sign"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
            </svg>
            <div className="station-text-block">
              <span className="station-badge">Аэропорт</span>
              <h2 className="station-title">
                Москва, Аэропорт Шереметьево (SVO)
              </h2>
            </div>
          </div>
        </div>

        <div className="station-content">
          <div className="station-section order-address">
            <svg
              className="section-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className="section-body">
              <h3>Адрес станции</h3>
              <p className="station-address">
                141400, Московская обл., г. Химки, Терминал C / Терминал D,
                зона прилета
              </p>
              <span className="maps-caption">Открыть на карте</span>
              <div className="maps-buttons">
                <a
                  href="https://yandex.ru/maps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <img
                    src="https://img.icons8.com/color/48/yandex-maps.png"
                    alt="Yandex Карты"
                  />{" "}
                  Yandex
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <img
                    src="https://img.icons8.com/color/48/google-maps-new.png"
                    alt="Google Maps"
                  />{" "}
                  Google
                </a>
              </div>
            </div>
          </div>

          <div className="station-section order-features">
            <svg
              className="section-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="section-body">
              <h3>Режим работы</h3>
              <p className="station-time">
                Каждый день: <strong>09:00 — 21:00</strong>
              </p>
            </div>
          </div>

          <div className="station-section order-contacts">
            <svg
              className="section-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.635-5.165-3.976-6.8-6.8l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div className="section-body">
              <h3>Контакты</h3>
              <div className="phone-messenger-row">
                <span className="station-phone">+7 (495) 123-45-67</span>

                <div className="messenger-channels">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msg-link tg"
                    title="Telegram"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.48 2.75-2.7.01-.03.01-.14-.05-.2-.06-.06-.15-.04-.21-.03-.1.02-1.62 1.02-4.57 3.02-.43.3-.82.44-1.17.43-.39-.01-1.15-.22-1.71-.41-.69-.23-1.24-.35-1.19-.74.03-.2.3-.4.81-.6 3.16-1.37 5.27-2.28 6.33-2.73 3.02-1.28 3.65-1.5 4.06-1.51.09 0 .29.02.42.13.11.09.14.21.15.3-.01.07-.01.14-.02.17z" />
                    </svg>
                    <span className="sr-only">Telegram</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msg-link wa"
                    title="WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 13.01c-.24.68-1.2 1.23-1.66 1.29-.46.06-.92.08-2.91-.7-2.54-1-4.17-3.59-4.3-3.76-.13-.17-1.03-1.37-1.03-2.61 0-1.24.65-1.85.88-2.11.23-.26.5-.32.66-.32h.48c.15 0 .36.01.55.46.2.49.69 1.69.75 1.82.06.13.1.28 0 .49-.1.21-.15.34-.31.53-.16.19-.34.33-.49.51-.17.19-.35.39-.15.74.2.34.89 1.46 1.91 2.37 1.31 1.17 2.42 1.53 2.77 1.7.35.17.55.15.76-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.11 1 2.47 1.18.36.18.6.27.69.42.09.15.09.87-.15 1.55z" />
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msg-link max"
                    title="Max"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
                      <text
                        x="12"
                        y="16.5"
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="700"
                        fill="#ffffff"
                        fontFamily="Verdana, Geneva, sans-serif"
                      >
                        M
                      </text>
                    </svg>
                    <span className="sr-only">Max</span>
                  </a>
                  <a href="#" className="msg-link chat" title="Онлайн чат">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                    </svg>
                    <span className="sr-only">Онлайн чат</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="features-strip order-features-strip">
            <div className="features-strip-list">
              {STATION_FEATURES.map((feature) => (
                <div className="feature-chip" key={feature.label}>
                  <span className="feature-chip-dot" aria-hidden="true" />
                  <span className="feature-chip-label">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="accordion-section order-accordions">
            {ACCORDION_ITEMS.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.title}
                  className={`accordion-item${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="trigger-title">
                      <strong>{item.title}</strong>
                    </span>
                    <svg
                      className="accordion-arrow-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className="accordion-content"
                    ref={(el) => {
                      contentRefs.current[index] = el
                    }}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[index]?.scrollHeight ?? 1000}px`
                        : "0px",
                    }}
                  >
                    <div className="instructions-inner">
                      <p className="instruction-text">{item.description}</p>
                      <div className="instruction-gallery">
                        {item.gallery.map((image) => (
                          <div className="gallery-item" key={image.src}>
                            <img src={image.src} alt={image.alt} />
                            <span>{image.caption}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
