from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Yuri_Barbosa_Couto_CV.pdf"
FONT_DIR = Path("C:/Windows/Fonts")


def register_fonts() -> tuple[str, str]:
    regular = FONT_DIR / "arial.ttf"
    bold = FONT_DIR / "arialbd.ttf"
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("CV-Regular", str(regular)))
        pdfmetrics.registerFont(TTFont("CV-Bold", str(bold)))
        return "CV-Regular", "CV-Bold"

    return "Helvetica", "Helvetica-Bold"


def build_pdf() -> None:
    font_regular, font_bold = register_fonts()
    OUTPUT.parent.mkdir(exist_ok=True)

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name="CVTitle",
        parent=styles["Title"],
        fontName=font_bold,
        fontSize=20,
        leading=24,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="CVContact",
        parent=styles["Normal"],
        fontName=font_regular,
        fontSize=8.7,
        leading=12,
        textColor=colors.HexColor("#334155"),
        spaceAfter=6,
    ))
    styles.add(ParagraphStyle(
        name="CVHeading",
        parent=styles["Heading2"],
        fontName=font_bold,
        fontSize=10.2,
        leading=13,
        textColor=colors.HexColor("#047857"),
        spaceBefore=8,
        spaceAfter=4,
    ))
    styles.add(ParagraphStyle(
        name="CVBody",
        parent=styles["BodyText"],
        fontName=font_regular,
        fontSize=8.45,
        leading=11.1,
        textColor=colors.HexColor("#1e293b"),
        spaceAfter=3,
    ))
    styles.add(ParagraphStyle(
        name="CVStrong",
        parent=styles["BodyText"],
        fontName=font_bold,
        fontSize=8.55,
        leading=11.1,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=2,
    ))
    styles.add(ParagraphStyle(
        name="CVBullet",
        parent=styles["BodyText"],
        fontName=font_regular,
        fontSize=8.35,
        leading=10.8,
        textColor=colors.HexColor("#1e293b"),
    ))

    story = []

    def paragraph(text: str, style: str = "CVBody") -> None:
        story.append(Paragraph(text, styles[style]))

    def bullets(items: list[str]) -> None:
        story.append(ListFlowable(
            [ListItem(Paragraph(item, styles["CVBullet"]), leftIndent=10) for item in items],
            bulletType="bullet",
            bulletFontName=font_regular,
            bulletFontSize=5.5,
            leftIndent=12,
            bulletIndent=2,
            spaceAfter=2,
        ))

    paragraph("Yuri Barbosa Couto", "CVTitle")
    paragraph(
        "São João de Meriti, RJ | yuri.barbosa384@gmail.com | "
        "GitHub: github.com/yuribarbosacouto | "
        "Portfólio: yuribarbosacouto.github.io/yuri-dev-portfolio/",
        "CVContact",
    )
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#cbd5e1"), spaceAfter=6))

    paragraph("Objetivo", "CVHeading")
    paragraph("Estágio ou oportunidade júnior em desenvolvimento full stack, com foco em sistemas web, APIs, automação e produtos para rotinas administrativas, operações e backoffice.")

    paragraph("Resumo", "CVHeading")
    paragraph("Estudante de Análise e Desenvolvimento de Sistemas, com experiência administrativa no Bradesco Seguros e vivência em processos operacionais. Tenho prática com documentos, planilhas, cadastros, contratos, controle de tarefas e apoio a fluxos internos. Hoje conecto essa vivência com desenvolvimento de software, criando sistemas web com React, TypeScript, Node.js, SQL, Python, testes, CI e documentação para reduzir retrabalho e organizar fluxos de backoffice.")

    paragraph("Formação", "CVHeading")
    paragraph("<b>Análise e Desenvolvimento de Sistemas - UNIGRANRIO</b><br/>2º semestre | Início: ago/2025 | Previsão de conclusão: jul/2027")

    paragraph("Projetos", "CVHeading")
    paragraph("<b>OpsFlow Administrativo</b> - Central de Operações e SLA full stack para priorizar demandas administrativas, detectar gargalos, calcular score de risco, controlar prazos críticos e registrar decisões operacionais.", "CVStrong")
    bullets([
        "React, TypeScript, Express, SQLite, Zod, Vitest e GitHub Actions.",
        "Dashboard, fila operacional, Kanban, relatórios, CRUD completo, comentários internos, auditoria, filtros compartilháveis e exportação CSV.",
        "Demo: yuribarbosacouto.github.io/opsflow-service-desk/ | Código: github.com/yuribarbosacouto/opsflow-service-desk",
    ])

    paragraph("<b>Lume Fashion Commerce</b> - E-commerce de moda UX-first com catálogo, filtros compartilháveis, PDP com guia de medidas, carrinho e checkout.", "CVStrong")
    bullets([
        "Next.js, TypeScript, Tailwind CSS, Playwright e GitHub Actions.",
        "SEO com JSON-LD, audit limpo, static export e E2E desktop/mobile cobrindo o funil crítico.",
        "Demo: yuribarbosacouto.github.io/lume-fashion-commerce/ | Código: github.com/yuribarbosacouto/lume-fashion-commerce",
    ])

    paragraph("Experiência", "CVHeading")
    paragraph("<b>Bradesco Seguros - Jovem Aprendiz Administrativo</b><br/>abr/2024 - mar/2026", "CVStrong")
    bullets([
        "Apoio ao controle e atualização de documentos, contratos, cadastros e informações internas, contribuindo para reduzir retrabalho e melhorar a organização das demandas da área.",
        "Lançamento e atualização de dados em planilhas Excel, incluindo cadastro de lotes e acompanhamento de demandas operacionais.",
        "Suporte a processos internos ligados a PCN, normas corporativas e demandas regulatórias, com atenção a prazos, registros e padronização.",
        "Desenvolvimento de painel interno no Microsoft Power Apps para cadastro, acompanhamento e controle de tarefas administrativas.",
        "Atuação com Word, PowerPoint e organização do fluxo operacional da área.",
    ])

    paragraph("<b>Lumeway / Operação Shopee - Freelancer Operacional</b><br/>Períodos intermitentes em 2025 e 2026 | Duque de Caxias, RJ", "CVStrong")
    bullets([
        "Separação de pedidos, organização de mercadorias e apoio em carga e descarga.",
        "Cumprimento de rotinas operacionais com foco em agilidade, organização e segurança.",
    ])

    paragraph("Cursos", "CVHeading")
    bullets([
        "Programação - Grau Técnico | ago/2023 a ago/2024: HTML, CSS, JavaScript, SQL, lógica de programação e banco de dados.",
        "Arco Administrativo - CIEE: rotina corporativa, organização profissional e apoio administrativo.",
    ])

    paragraph("Competências", "CVHeading")
    paragraph("React, TypeScript, HTML, CSS, Node.js, Express, Python, Flask, APIs REST, SQL, SQLite, MySQL, Git, GitHub Actions, testes automatizados, documentação, Power Apps, Excel e rotinas administrativas.")

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=1.35 * cm,
        leftMargin=1.35 * cm,
        topMargin=1.25 * cm,
        bottomMargin=1.25 * cm,
    )
    doc.build(story)


if __name__ == "__main__":
    build_pdf()
    print(OUTPUT)
