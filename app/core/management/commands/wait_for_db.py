from django.core.management.base import BaseCommand
import time
import socket
from psycopg2 import OperationalError as Psycopg2OpError
from django.db.utils import OperationalError
import psycopg2

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write('Waiting for the database')
        db_up = False
        while db_up is False:
            try:
                self.check(databases=['default'])
                db_up = True
            except (Psycopg2OpError, OperationalError):
                self.stdout.write('Database unavailable, waiting for 1 second...')
                time.sleep(1)

        self.stdout.write('Database available!')

        # Retrieve the IP address of the database service
        db_ip = socket.gethostbyname('db')

        # Check the connection status between the app service and the database IP
        try:
            conn = psycopg2.connect(host=db_ip, dbname='devdb', user='devuser', password='changeme')
            if conn.status == psycopg2.extensions.STATUS_READY:
                self.stdout.write(self.style.SUCCESS('App service connected to the database IP successfully!'))
            else:
                self.stdout.write('App service failed to connect to the database IP.')
        except psycopg2.Error as e:
            self.stdout.write('Error connecting to the database:', e)
        finally:
            conn.close()
