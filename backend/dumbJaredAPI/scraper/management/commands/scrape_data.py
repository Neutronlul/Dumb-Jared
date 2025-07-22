from django.core.management.base import BaseCommand
from dumbJaredAPI.scraper.services.scraper_service import ScraperService


class Command(BaseCommand):
    help = "Scrape data from trivia website and save it to the database"

    def add_arguments(self, parser):
        parser.add_argument(
            "--url",
            metavar="URL",
            type=str,
            required=True,
            help="The base URL of the website to scrape data from",
        )
        parser.add_argument(
            "--end-date",
            metavar="YYYY-MM_DD",
            type=str,
            required=False,
            default=None,
            help="The date to stop scraping at, in YYYY-MM-DD format",
        )

    def handle(self, *args, **options):
        service = ScraperService()
        data = service.scrape_data(
            source_url=options["url"],
            end_date=options["end_date"],
        )
        service.pushToDB(data)
        self.stdout.write(self.style.SUCCESS("Data scraped and saved successfully."))
